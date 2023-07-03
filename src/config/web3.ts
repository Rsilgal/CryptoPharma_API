import Web3 from "web3";
import { ControllerContract } from "../abi/contract";

const web3 = new Web3(`wss://sepolia.infura.io/ws/v3/${process.env.INFURA_KEY}`);
const contract= new web3.eth.Contract(ControllerContract.abi, ControllerContract.address); //https://web3js.org/#/

export { contract }