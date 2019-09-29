var abi2 = [
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
				"name": "id",
				"type": "uint256"
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
				"name": "contact",
				"type": "uint256"
			},
			{
				"name": "problem",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "Doct",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "uint256"
			},
			{
				"name": "Id",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "UpdatePatientAppointment",
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
		"name": "GetAppointments",
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
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "RetrivePatientAppointment",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
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
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
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
				"name": "contact",
				"type": "uint256"
			},
			{
				"name": "problem",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "Doct",
				"type": "uint256"
			}
		],
		"name": "RegisterPatientAppintment",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
    var contractaddress2 = '0x5c43f8de33929988c5c70a86674c0af63c61e84b';
    var myAbi2 = web3.eth.contract(abi2);
    var myfunction2 = myAbi2.at(contractaddress2);

var abi = [
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
			},
			{
				"name": "id",
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
			},
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
	}
];
    var contractaddress = '0x28f918ab89bdbf270ca65b5b36450e52cf7e7f1c';
    var myAbi = web3.eth.contract(abi);
    var myfunction = myAbi.at(contractaddress);
    
var abi1 =[
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
				"name": "contact",
				"type": "uint256"
			},
			{
				"name": "department",
				"type": "string"
			},
			{
				"name": "Address",
				"type": "string"
			},
			{
				"name": "Id",
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
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "RetriveDocotorDetails",
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
				"type": "uint256"
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
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
				"name": "contact",
				"type": "uint256"
			},
			{
				"name": "department",
				"type": "string"
			},
			{
				"name": "Address",
				"type": "string"
			}
		],
		"name": "RegisterDoctor",
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
		"name": "GetDoctors",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
    var contractaddress1 = '0x5f1e5df4adc8f279ba313c941252b8ebc9ebb537';
    var myAbi1 = web3.eth.contract(abi1);
    var myfunction1 = myAbi1.at(contractaddress1);

var abi3 = [
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
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "string"
			},
			{
				"name": "ide",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetPatientAppData",
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
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "string"
			}
		],
		"name": "EnterPatientAppData",
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
		"inputs": [
			{
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "RetrivePatientAppData",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
    var contractaddress3 = '0x4c04d539259b59f95ac3bcd9ed7d53cf03d842a8';
    var myAbi3 = web3.eth.contract(abi3);
    var myfunction3 = myAbi3.at(contractaddress3);
	
	//0-doc_id, 1-tratment, 2- Diesease , 3-Complaints ,4-pre_eval, 5- diag, 6-date	

var abi4 =[
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
				"name": "contact",
				"type": "uint256"
			},
			{
				"name": "department",
				"type": "string"
			},
			{
				"name": "Address",
				"type": "string"
			}
		],
		"name": "RegisterLabtech",
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
		"name": "GetLabtech",
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
				"name": "contact",
				"type": "uint256"
			},
			{
				"name": "department",
				"type": "string"
			},
			{
				"name": "Address",
				"type": "string"
			},
			{
				"name": "Id",
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
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "RetriveLabtechDetails",
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
				"type": "uint256"
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
    var contractaddress4 = '0x8d90c15b73b6751271d7ff2f3284c94d47567968';
    var myAbi4 = web3.eth.contract(abi4);
    var myfunction4 = myAbi4.at(contractaddress4);

var abi5 =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "Desc",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "Doct",
				"type": "uint256"
			},
			{
				"name": "no_of_tests",
				"type": "uint256"
			}
		],
		"name": "RegisterPatientLabAppointment",
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
		"constant": false,
		"inputs": [
			{
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "UpdatePatientLabAppointment",
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
		"name": "GetLabAppointments",
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
				"name": "Pid",
				"type": "uint256"
			},
			{
				"name": "Desc",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "Doct",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "uint256"
			},
			{
				"name": "no_of_tests",
				"type": "uint256"
			},
			{
				"name": "Id",
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
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "RetrivePatientLabAppointment",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
    var contractaddress5 = '0xea8694609324196dc7057f4f54e804581a85704c';
    var myAbi5 = web3.eth.contract(abi5);
    var myfunction5 = myAbi5.at(contractaddress5);
	
var d=new Date();
					var p11 = ""+d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
					
					
var abi6 =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "string"
			}
		],
		"name": "EnterLabAppData",
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
		"name": "GetLabAppData",
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
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "string"
			},
			{
				"name": "ide",
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
				"name": "key",
				"type": "uint256"
			}
		],
		"name": "RetriveLabAppData",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
    var contractaddress6 = '0x2871c020db65f400cba6275af034af34ed55b9ae';
    var myAbi6 = web3.eth.contract(abi6);
    var myfunction6 = myAbi6.at(contractaddress6);