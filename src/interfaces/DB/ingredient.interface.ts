import { RowDataPacket } from "mysql2";

export interface Ingredient  extends RowDataPacket {
    name: string,
    description: string
}