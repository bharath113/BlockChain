window.onload = function () {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
            key = web3.eth.accounts[0];
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
            key = web3.eth.accounts[0];
        }
         //GetPatientData();
         //Doctors();
}

var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "gender",
				"type": "string"
			},
			{
				"name": "birthday",
				"type": "string"
			},
			{
				"name": "contact",
				"type": "uint256"
			},
			{
				"name": "maritalStatus",
				"type": "bool"
			},
			{
				"name": "Address",
				"type": "string"
			}
		],
		"name": "RegisterPatient",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetPatients",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Mappings",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "email",
				"type": "string"
			},
			{
				"name": "gender",
				"type": "string"
			},
			{
				"name": "birthday",
				"type": "string"
			},
			{
				"name": "contact",
				"type": "uint256"
			},
			{
				"name": "maritalStatus",
				"type": "bool"
			},
			{
				"name": "Address",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "RetrivePatientDetails",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
    var contractaddress = '0x25c8faf0c28e491f62a9536c183d638402a2de29';
    var myAbi = web3.eth.contract(abi);
    var myfunction = myAbi.at(contractaddress);
    
    function GetPatientData() {    
    myfunction.GetPatients.call(function (error, result) {
        if (!error) { 
          var table = document.getElementById('myTable');
          for(var i=0;i<result;i++)
          {
            myfunction.RetrivePatientDetails.call(i+1,function(error,results){
              if(!error){
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                //var cell5 = row.insertCell(4);
                cell1.innerHTML = results[0];
                cell2.innerHTML = results[1];
                cell3.innerHTML = results[2];
                cell4.innerHTML = results[4];
                //cell5.innerHTML = '<button class="vap" style="vertical-align:middle" onclick="myfun();Doctor();"><span>book</span></button>';
              }
              else
              alert(error);
            });
          }
         }
         else
         alert(error);
      }
    )
  }


    function RegPatient() {
     var p = document.getElementById('id01');

      p.style.display = "none";
 
      var p1 = document.getElementById('pname').value;
      var p2 = document.getElementById('pemail').value;
      var p4 = document.getElementById('padd').value;
      var p5 = document.getElementById('pcity').value;
      var p6 = document.getElementById('pstate').value;
      var p7 = document.getElementById('pcontact').value;
      var p8 = document.getElementById('psex').value;
      var p9 = ""+document.getElementById('pbd').value;
      var p10 = document.getElementById('pmar').value;
			var p12 = p4+"-"+p5+"-"+p6;
			var num;
			var ok=1;

			
   myfunction.RegisterPatient.sendTransaction(
      p1, p2, p8, p9, p7, p10, p12, function(error, result){
       if(!error) 
	     {alert(result);}
	     });
			alert("Patient already Registered");
		}
