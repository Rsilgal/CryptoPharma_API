import { RowDataPacket } from "mysql2";

export interface ProductTransaction extends RowDataPacket {
    fromAddress: string,
    toAddress: string,
    nftAdress: string,
    quantity : number
}