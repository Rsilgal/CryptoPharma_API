const ControllerContract = {
    "address": "0x9c59D33594bC1f6046d704246A6CF9B9D3EF24F5",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_prescriptionToken",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_productToken",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "previousAdminRole",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "newAdminRole",
                    "type": "bytes32"
                }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleGranted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleRevoked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "MINTER_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "PAUSER_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "prescriptionId",
                    "type": "uint256"
                }
            ],
            "name": "buyProduct",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountToTake",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "coolDownHours",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "productQuantity",
                    "type": "uint256"
                }
            ],
            "name": "createPrescription",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_productName",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_productDescription",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "_productLot",
                    "type": "bytes32"
                },
                {
                    "internalType": "bool",
                    "name": "_productPharmaService",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_productHospitalService",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_productAuthorization",
                    "type": "bool"
                },
                {
                    "internalType": "uint256",
                    "name": "_productQuantity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_productExpireDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_productPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_purchaseQuantity",
                    "type": "uint256"
                }
            ],
            "name": "createProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getPrescription",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "productId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amountToTake",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "coolDownHours",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "productQuantity",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct PrescriptionToken.Prescription",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getProduct",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "Name",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "Desctiption",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "Lot",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "Quantity",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "ExpireDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "Price",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "PharmaService",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "HospitalService",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "NeedAuthorization",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct ProductToken.Product",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                }
            ],
            "name": "getRoleAdmin",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "hasRole",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sellProduct",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpaused",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
}

export { ControllerContract }