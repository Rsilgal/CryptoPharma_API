import Web3 from "web3";

const contractsData = require('../abi/contract.json');
const web3 = new Web3(`wss://sepolia.infura.io/ws/v3/${process.env.INFURA_KEY}`);

export const contract = new web3.eth.Contract(contractsData.abi, contractsData.address); //https://web3js.org/#/