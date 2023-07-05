import { RowDataPacket } from "mysql2"

export default interface Product  extends RowDataPacket {
    name: string,
    description: string,
    lot: string,
    quantity: number,
    expireDate: string
    price: number
    pharmaService: boolean,
    hospitalService: boolean,
    needAuthorization: boolean
}

