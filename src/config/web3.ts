import {Web3} from "web3";
import { controllerAddress, controllerABI } from "../abi/contract";

const web3 = new Web3(`wss://sepolia.infura.io/ws/v3/${process.env.INFURA_KEY}`);

const contract = new web3.eth.Contract(controllerABI, controllerAddress);

export { contract }