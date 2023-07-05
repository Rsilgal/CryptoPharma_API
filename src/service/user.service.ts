import { pool } from "../config/mysql";
import { User } from "../interfaces/DB/user.interface";

const getAllUsers = async () => {
    const [rows] = await pool.query<User[]>("SELECT * FROM users ORDER BY UsersId ASC");
    return rows;
};

const getOneUser = async (userIdentifier: number) => {
    const [rows] = await pool.query<User[]>("SELECT * FROM users WHERE UsersId = ?", [userIdentifier]);
    return rows[0];
};

const createUser = async (user: User) => {
    const { name, registerDate, adressWallet } = user;
    const [rows] = await pool.query<User[]>("INSERT INTO users (Name, RegisterDate, AddressWallet) VALUES (?,?,?)", [name, registerDate, adressWallet]);
    return rows;
};

export { getAllUsers, getOneUser, createUser }