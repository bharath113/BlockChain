pragma solidity ^0.5.0;

contract patientdata
{
    struct patientData
    {
        uint id;
        string data;
        uint ide;
    }
       uint Id=0;
       
    mapping(uint => patientData) public Mappings;
    
    function EnterPatientAppData(uint id, string memory data) public returns(uint){
                                Id = Id+1;
                                Mappings[Id].id = id;
                                Mappings[Id].data = data;
                                Mappings[Id].ide = Id;
                                return uint(Id);
                            }
    
    function RetrivePatientAppData(uint key) public view returns(uint , string memory, uint){
                    patientData memory a = Mappings[key];                    
                                       return(a.id, a.data, a.ide);
                                    }

    function GetPatientAppData() public view returns(uint){
         return Id;
    }
    
}