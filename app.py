from flask import flash, Flask, redirect, render_template, request, session, url_for
from wtforms import *
#from passlib.hash import sha256_crypt
from functools import wraps
from random import randint
from datetime import datetime
import time
import gc,os
##import json
#import execjs
from MySQLdb import escape_string as thwart
import MySQLdb

def connection():
    conn = MySQLdb.connect(host="localhost",
                           user = "root",
                           passwd="",
                           db= "major_project")
    c = conn.cursor()
    return c, conn


app=Flask(__name__)
app.secret_key = 'super secret key'

APP_ROOT = os.path.dirname(os.path.abspath(__file__))

c, conn = connection()
sql = "select count(*) from login where role = 0"
a = c.execute(sql)
a = c.fetchall()
Receptionist_length = a[0][0]

sql = "select count(*) from login where role = 1"
a = c.execute(sql)
a = c.fetchall()
Doctor_length = a[0][0]

sql = "select count(*) from login where role = 2"
a = c.execute(sql)
a = c.fetchall()
Patient_length = a[0][0]

sql = "select count(*) from login where role = 3"
a = c.execute(sql)
a = c.fetchall()
LabTech_length = a[0][0]
c.close()
conn.close()

Patient_contract_address = '0x28f918ab89bdbf270ca65b5b36450e52cf7e7f1c'
Doctor_contract_address = '0x5f1e5df4adc8f279ba313c941252b8ebc9ebb537'
Appointment_contract_address = '0x5c43f8de33929988c5c70a86674c0af63c61e84b'
Patient_record_contract_address = '0x4c04d539259b59f95ac3bcd9ed7d53cf03d842a8'
Lab_tech_contract_address = '0x8d90c15b73b6751271d7ff2f3284c94d47567968'
LabTest_appointment_contract_address = '0xc760c53ddd4d6b8e87b1486546b9428efc14b330'
LabTest_report_contract_address = '0x06a82f5dbf3bed2f2684bdd6ac2c657c359d389d'

contract_address = [Patient_contract_address, Doctor_contract_address, Appointment_contract_address, Patient_record_contract_address, Lab_tech_contract_address, LabTest_appointment_contract_address, LabTest_report_contract_address]

@app.route("/")
def index():
    if 'logged_in' in session:
        if (session['role']==0):
            return redirect(url_for("receptionist"))
        elif (session['role']==1):
            return redirect(url_for("doctor"))
        elif (session['role']==2):
            return redirect(url_for("patient"))
        elif (session['role']==3):
            return redirect(url_for("lab_tech"))
    return render_template("index.html")

@app.route("/login", methods=['GET','POST'])
def login():
    try:
        if request.method == "POST":
            username = request.form['username']
            password = request.form['password']
            c, conn = connection()
            sql="select * from login where email ='"+str(username)+"' and password = '"+str(password)+"'"
            details = c.execute(sql)
            if(details==0):
                return render_template("index.html", error = "Login Details does not match")
            details = c.fetchone()
            session['logged_in'] = True
            session['username'] = username
            session['Id'] = details[2]
            session['role'] = details[3]
            if (details[3]==0):
                return redirect(url_for("receptionist"))
            elif (details[3]==1):
                return redirect(url_for("doctor"))
            elif (details[3]==2):
                return redirect(url_for("patient"))
            elif (details[3]==3):
                return redirect(url_for("lab_tech"))
            c.close()
            conn.close()
    except Exception as e:
        return e
        #return render_template("index.html",error=error)

@app.route("/receptionist", methods=['GET','POST'])
def receptionist():
    if 'logged_in' in session and session['role']==0:
        return render_template("receptionist.html", recId = session['Id'], contract_address = contract_address)
    elif 'logged_in' in session:
        return redirect(url_for('index'))
    else:
        error="You need to login first"#flash("You need to login first")
        return render_template("index.html",error=error)#redirect(url_for("Login_page"))

@app.route("/logout")
def logout():
    session.clear()
    gc.collect()
    return redirect(url_for('index'))

@app.route("/register_patient", methods=['GET','POST'])
def register_patient():
    global Patient_length
    email = request.form['email']
    password = email[:email.index('@')]
    c, conn = connection()
    sql = "select * from login where email = '"+str(email)+"'"
    em = c.execute(sql)
    if(em>0):
        return render_template("receptionist.html", recId = session['Id'], error = "User already exist", contract_address = contract_address)
    Patient_length = Patient_length+1
    sql="Insert into login(email, password, id, role) values('"+email+"','"+password+"',"+str(Patient_length)+",2)" 
    det = c.execute(sql)
    conn.commit()
    c.close()
    conn.close()
    return redirect(url_for('receptionist'))

@app.route("/register_doctor", methods=['GET','POST'])
def register_doctor():
    global Doctor_length
    email = request.form['demail']
    password = email[:email.index('@')]
    c, conn = connection()
    sql = "select * from login where email = '"+str(email)+"'"
    em = c.execute(sql)
    if(em>0):
        return render_template("receptionist.html", recId = session['Id'], error = "Doctor already exist",contract_address = contract_address)
    Doctor_length = Doctor_length+1
    sql="Insert into login(email, password, id, role) values('"+email+"','"+password+"',"+str(Doctor_length)+",1)" 
    det = c.execute(sql)
    conn.commit()
    c.close()
    conn.close()
    return redirect(url_for('receptionist'))

@app.route("/register_labtech", methods=['GET','POST'])
def register_labtech():
    global LabTech_length
    email = request.form['email']
    password = email[:email.index('@')]
    c, conn = connection()
    sql = "select * from login where email = '"+str(email)+"'"
    em = c.execute(sql)
    if(em>0):
        return render_template("receptionist.html", recId = session['Id'], error = "Doctor already exist",contract_address = contract_address)
    LabTech_length = LabTech_length+1
    sql="Insert into login(email, password, id, role) values('"+email+"','"+password+"',"+str(LabTech_length)+",3)" 
    det = c.execute(sql)
    conn.commit()
    c.close()
    conn.close()
    return redirect(url_for('receptionist'))

@app.route("/doctor", methods=['GET','POST'])
def doctor():
    if 'logged_in' in session and session['role']==1:
        return render_template("doctor.html", docId = session['Id'], contract_address = contract_address)
    elif 'logged_in' in session:
        return redirect(url_for('index'))
    else:
        error="You need to login first"
        return render_template("index.html",error=error)
    

@app.route("/appointments_of_doctor", methods=["GET","POST"])
def appointments_of_doctor():
    if 'logged_in' in session and session['role']==1:
        return render_template("appointments_of_doctor.html", docId = session['Id'],contract_address = contract_address)
    else:
        return redirect(url_for('index'))

@app.route("/Patient_appointment_details/<appId>", methods=["GET","POST"])
def Patient_appointment_details(appId):
    if 'logged_in' in session and session['role']==1:
        return render_template("appointment_details_of_doctor.html",appId=appId, docId = session['Id'],contract_address = contract_address)
    else:
        return redirect(url_for('index'))

@app.route("/patient",methods=["GET","POST"])
def patient():
    if 'logged_in' in session and session['role']==2:
        return render_template("patient.html", patId = session['Id'],contract_address = contract_address)
    elif 'logged_in' in session:
        return redirect(url_for('index'))
    else:
        error="You need to login first"
        return render_template("index.html",error=error,contract_address = contract_address)

@app.route("/records_of_patient/<patId>", methods=["GET","POST"])
def records_of_patient(patId):
    if 'logged_in' in session and session['role']==2:
        return render_template("appointments_of_patient.html",patId=patId,contract_address = contract_address)
    else:
        error="You need to login first"
        return render_template("index.html",error=error)

@app.route("/appointments_view_by_patient/<dataId>", methods=["GET","POST"])
def appointments_view_by_patient(dataId):
    if 'logged_in' in session and (session['role']==2 or session['role']==1):
        return render_template("appointments_view_by_patient.html", dataId = dataId,contract_address = contract_address)
    else:
        error="You need to login first"
        return render_template("index.html",error=error)

@app.route("/lab_report_view/<recId>", methods=["GET","POST"])
def lab_report_view(recId):
    if 'logged_in' in session and (session['role']==2 or session['role']==1):
        return render_template("blood_lab_reports_view_by_doctor.html", recId = recId,contract_address = contract_address)
    else:
        error="You need to login first"
        return render_template("index.html",error=error)

@app.route("/appointments_view_by_doctor/<dataId>", methods=["GET","POST"])
def appointments_view_by_doctor(dataId):
    if 'logged_in' in session and (session['role']==2 or session['role']==1):
        return render_template("appointments_view_by_doctor.html", dataId = dataId,contract_address = contract_address)
    else:
        error="You need to login first"
        return render_template("index.html",error=error)

@app.route("/lab_tech", methods=["GET", "POST"])
def lab_tech():
    if 'logged_in' in session and (session['role']==3):
        return render_template("lab_tech.html", labId = session['Id'],contract_address = contract_address)
    else:
        error="You need to login first"
        return render_template("index.html",error=error)

@app.route("/lab_requests", methods=["GET", "POST"])
def lab_request():
    if 'logged_in' in session and session['role']==3:
        return render_template("lab_requests.html", labId = session['Id'], labRole = session['role'],contract_address = contract_address)
    else:
        return redirect(url_for('index'))

@app.route("/lab_test_blood/<appId>", methods=["GET", "POST"])
def lab_test_blood(appId):
    if 'logged_in' in session and session['role'] ==3:
        return render_template("lab_test_blood.html", labId = session['Id'], labRole = session['role'], appId=appId, contract_address = contract_address)
    else:
        return redirect(url_for('index'))



if __name__ == "__main__":
	app.run(debug=True)