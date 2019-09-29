pragma solidity ^0.5.0;
contract LabAppointment{
    struct app{
        uint Pid; //Patient Id
        uint appId;
        string Desc;
        string date;
        uint Doct; // Doctor Id
        uint status;
        uint no_of_tests;
        uint Id; //Id of the transaction
    }
     uint Id=0;
    mapping(uint => app) public Mappings;
    function RegisterPatientLabAppointment(uint id, string memory Desc, string memory date,
                            uint Doct, uint no_of_tests, uint appid) public returns(uint){
                                Id = Id+1;
                                Mappings[Id].Pid = id;
                                Mappings[Id].appId = appid;
                                Mappings[Id].date = date;
                                Mappings[Id].Desc = Desc;
                                Mappings[Id].Doct = Doct;
                                Mappings[Id].Id = Id;
                                Mappings[Id].no_of_tests = no_of_tests;
                                Mappings[Id].status = 0;
                                return uint(Id);
                            }
    function RetrivePatientLabAppointment(uint key) public view returns(uint , string memory , string memory ,
                             uint, uint, uint, uint, uint){
                        app memory a=Mappings[key];
                                       return(a.Pid, a.date, a.Desc, a.Doct, a.Id, a.status, a.no_of_tests, a.appId);
                             }
    function UpdatePatientLabAppointment(uint key) public returns(uint){
       Mappings[key].no_of_tests-=1;
        if(Mappings[key].no_of_tests == 0)
           Mappings[key].status=1;    
        return key;
    }
    function GetLabAppointments() public view returns(uint){
         return Id;
    }
}


