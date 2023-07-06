import { RowDataPacket } from "mysql2";
import { controllerAddress } from "../abi/controllerContract";
import { pool } from "../config/mysql"
import { controllerContract } from "../config/web3";
import { getPrescriptionInterface } from "../interfaces/SmartContracts/getPrescription.interface";
import { createPrescriptionInterface } from "../interfaces/SmartContracts/createPrescription.interface";
import { User } from "../interfaces/DB/user.interface";
import { Prescripcion } from "../interfaces/DB/prescription.interface";

const getAllPRescriptions = async () => {
    const [rows] = await pool.query<Prescripcion[]>('SELECT * FROM prescriptions order by idPrescription asc');
    return rows;
};

const getOnePrescription = async (token: getPrescriptionInterface) => {
    const result = await controllerContract.methods.getPrescription(token.tokenIdentifier).call();
    return result;
};

const createOnePrescription = async (_prescription: createPrescriptionInterface) => {
    const { userIdentifier, productIdentifier, amountToTakeFromProduct, coolDownToTakeOnHours, productQuantityToTake } = _prescription;
    const [rows_users] = await pool.query<User[]>("SELECT AddressWallet FROM users WHERE UsersId = ?", [userIdentifier]);
    const result = await controllerContract.methods.createPrescription(rows_users[0].userAddress, productIdentifier, amountToTakeFromProduct, coolDownToTakeOnHours, productQuantityToTake).send({ from: controllerAddress });
    const [rows] = await pool.query("INSERT INTO prescrions () VALUES (?,?,?,?,?)", [productIdentifier, amountToTakeFromProduct, coolDownToTakeOnHours, productQuantityToTake, userIdentifier]);
    return rows
};

export { getAllPRescriptions, getOnePrescription, createOnePrescription }