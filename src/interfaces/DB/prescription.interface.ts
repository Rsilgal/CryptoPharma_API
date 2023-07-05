import { RowDataPacket } from "mysql2";

export interface Prescripcion  extends RowDataPacket {
    idProduct: number,
    amountIngest: number,
    coolDownHours: number,
    productQuantity: number,
    userId: number
}