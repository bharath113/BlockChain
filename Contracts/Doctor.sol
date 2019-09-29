pragma solidity ^0.5.0;
contract Doctor{
    struct doctor{
        string name;
        string email;
        string gender;
        uint contact;
        string department;
        string Address;
        uint Id;
    }
    uint Id=0;
    mapping(uint => doctor) public Mappings;
    function RegisterDoctor(string memory name, string memory email, string memory gender,
                            uint contact,string memory department, string memory Address) public returns(uint){
                                Id = Id+1;
                                Mappings[Id].name = name;
                                Mappings[Id].email = email;
                                Mappings[Id].gender = gender;
                                Mappings[Id].department = department;
                                Mappings[Id].contact = contact;
                                Mappings[Id].Address = Address;
                                Mappings[Id].Id = Id;
                                return uint(Id);
                            }
    function RetriveDocotorDetails(uint key) public view returns(string memory, string memory, 
                                    string memory, uint, string memory, 
                                    string memory, uint){
        doctor memory d=Mappings[key];
                                        return(d.name, d.email, d.gender,
                                         d.contact, d.department,
                                         d.Address, d.Id
                                            );
                                    }
    function GetDoctors() public view returns(uint){
         return Id;
    }
    
}

