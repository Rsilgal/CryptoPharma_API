import {Web3} from "web3";
import { controllerAddress, controllerABI } from "../abi/controllerContract";
import { productABI, productAddress } from "../abi/productContract";
import { prescriptionABI, prescriptionAddress } from "../abi/prescriptionContract";

const web3 = new Web3(`wss://sepolia.infura.io/ws/v3/${process.env.INFURA_KEY}`);

const controllerContract = new web3.eth.Contract(controllerABI, controllerAddress);
const productContract = new web3.eth.Contract(productABI, productAddress);
const prescriptionContract = new web3.eth.Contract(prescriptionABI, prescriptionAddress);

export { controllerContract, productContract, prescriptionContract }