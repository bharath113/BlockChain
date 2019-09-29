pragma solidity ^0.5.0;

contract LabRecord
{
    struct Labdata
    {
        uint id;
        //string typ;
        string data;
        uint ide;
    }
       uint Id=0;
       
    mapping(uint => Labdata) public Mappings;
    
    function EnterLabAppData(uint id, string memory data) public returns(uint){
                                Id = Id+1;
                                Mappings[Id].id = id;
                                Mappings[Id].data = data;
                                
                                Mappings[Id].ide = Id;
                                return uint(Id);
                            }
    
    function RetriveLabAppData(uint key) public view returns(uint , string memory,  uint){
                    Labdata memory a = Mappings[key];                    
                                       return(a.id, a.data, a.ide);
                                    }

    function GetLabAppData() public view returns(uint){
         return Id;
    }
}