pragma solidity ^0.5.0;
contract Appointment{
    struct app{
        uint id; //Patient Id
        string email; //Patient Email
        string gender;
        uint contact;
        string problem;
        string date;
        uint Doct; // Doctor Id
        uint status;
        uint Id; //Id of the transaction
    }
     uint Id=0;
    mapping(uint => app) public Mappings;
    function RegisterPatientAppintment(uint id, string memory email, string memory gender,
                           uint contact, string memory problem, string memory date,
                            uint Doct) public returns(uint){
                                Id = Id+1;
                                Mappings[Id].id = id;
                                Mappings[Id].email = email;
                                Mappings[Id].gender = gender;
                                Mappings[Id].contact = contact;
                                Mappings[Id].date = date;
                                Mappings[Id].problem = problem;
                                Mappings[Id].Doct = Doct;
                                Mappings[Id].Id = Id;
                                Mappings[Id].status = 0;
                                return uint(Id);
                            }
    function RetrivePatientAppointment(uint key) public view returns(uint , string memory , string memory ,
                             uint, string memory, uint, string memory, uint, uint){
                        app memory a=Mappings[key];
                                       return(a.id, a.email,a.gender,
                                          a.contact, a.problem, a.Doct, a.date, a.Id, a.status);
                                    }
    function UpdatePatientAppointment(uint key) public returns(uint){
        Mappings[key].status=1;    
        return key;
    }
    function GetAppointments() public view returns(uint){
         return Id;
    }
}


