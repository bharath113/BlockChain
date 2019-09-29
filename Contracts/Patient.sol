pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
//import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract Patient{
    struct patient{
        string name;
        string email;
        string gender;
        string birthday;//or struct birthda
        uint contact;
        bool maritalStatus;
        string Address;
        uint id;
    }
    uint Id=0;
    mapping(uint => patient) public Mappings;
    function RegisterPatient(string memory name, string memory email, string memory gender,
                            string memory birthday, uint contact, bool maritalStatus, 
                            string memory Address) public returns(uint){
                                Id = Id+1;
                                Mappings[Id].name = name;
                                Mappings[Id].email = email;
                                Mappings[Id].gender = gender;
                                Mappings[Id].birthday = birthday;
                                Mappings[Id].contact = contact;
                                Mappings[Id].maritalStatus = maritalStatus;
                                Mappings[Id].Address = Address;
                                Mappings[Id].id = Id;
                                return Id;
                            }
    function RetrivePatientDetails(uint key) public view returns(string memory, string memory, 
                                    string memory, string memory, uint, bool, 
                                    string memory, uint){
                                        patient memory p = Mappings[key];
                                        return(p.name, p.email, p.gender,
                                         p.birthday,p.contact, p.maritalStatus,
                                         p.Address, p.id);
                                    }
    function GetPatients() public view returns(uint){
         return Id;
    }
}

