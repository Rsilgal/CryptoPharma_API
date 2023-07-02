import { pool } from "../config/mysql"
import { contract } from "../config/web3";
import { Product } from "../interfaces/product.interface";

const getAllProducts = () => { }

const getOneProduct = async (idToken: number) => {
    const response = await contract.methods.getProduct().call();
    // const { Name, Description, Lot, Quantity, ExpireDate, Price, PharmaService, HospitalService, NeedAuthorization } = response
    return response;
};

const createOneProduct = async (_product: Product) => {
    const { name, description, lot, quantity, expireDate, price, pharmaService, hospitalService, needAuthorization } = _product;
    const response = await contract.methods.createProduct(name, description, lot, pharmaService, hospitalService, needAuthorization, quantity, expireDate, price, quantity).send();
    const [rows] = await pool.query('INSERT INTO products VALUES (?,?,?,?,?,?,?,?,?,?)', [name, description, lot, quantity, expireDate, price, pharmaService, hospitalService, needAuthorization])
    return rows;
}; 

const buyOneProduct = () => { };

const sellOneProduct = () => { };

export { getAllProducts, getOneProduct, createOneProduct, buyOneProduct, sellOneProduct }