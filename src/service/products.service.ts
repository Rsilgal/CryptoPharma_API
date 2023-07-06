import { controllerAddress } from "../abi/controllerContract";
import { pool } from "../config/mysql"
import { controllerContract } from "../config/web3";
import Product from "../interfaces/DB/product.interface";
import { ProductTransaction } from "../interfaces/DB/transaction.interface";
import { buyProductInterface } from "../interfaces/SmartContracts/buyProduct.interface";
import { createProductInterface } from "../interfaces/SmartContracts/createProduct.interface";
import { getproductInterface } from "../interfaces/SmartContracts/getProduct.interface";
import { sellProductInterface } from "../interfaces/SmartContracts/sellProduct.interface";

const getAllProducts = async () => {
    const [rows] = await pool.query<Product[]>('SELECT * FROM products ORDER BY idProducts asc')
    return rows;
}

const getOneProduct = async (token: getproductInterface) => {
    const response = await controllerContract.methods.getProduct(token.tokenIdentifier).call();
    return response;
};

const createOneProduct = async (_product: createProductInterface) => {
    const { name, description, lot, quantity, expireDate, price, isPharmaService, isHospitalService, needAuthorization } = _product;
    const _expireDate = Date.parse(expireDate) / 1000;
    const response = await controllerContract.methods.createProduct(name, description, lot, isPharmaService, isHospitalService, needAuthorization, quantity, expireDate, price, quantity).send({ from: controllerAddress });
    const [rows] = await pool.query<Product[]>('INSERT INTO products (Name, Description, Lot, Quantity, ExpireDate, Price, PharmaService, HospitalService, NeedAuthorization) VALUES (?,?,?,?,?,?,?,?,?)', [name, description, lot, quantity, _expireDate, price, isPharmaService, isHospitalService, needAuthorization]);
    return rows;
};

const buyOneProduct = async (_product: buyProductInterface) => {
    const { seller, buyer, amount, productIdentifier, prescriptionIdentifier } = _product
    const response = (await controllerContract.methods.buyProduct(seller, buyer, productIdentifier, amount, prescriptionIdentifier).send({ from: buyer })); //, gas: '1000000', gasPrice: '10000000000'
    const [rows] = await pool.query<ProductTransaction[]>('INSERT INTO transactions (FromAddress, ToAddress, NFTAddress, Quantity) VALUES (?,?,?,?)', [seller, buyer, productIdentifier, amount]);
    return rows;
};

const sellOneProduct = async (_product: sellProductInterface) => {
    const { seller, buyer, productIdentifuer, amount } = _product
    const response = await controllerContract.methods.sellProduct(seller, buyer, productIdentifuer, amount).send({ from: buyer });
    const [rows] = await pool.query<ProductTransaction[]>('INSERT INTO transactions (FromAddress, ToAddress, NFTAddress, Quantity) VALUES (?,?,?,?)', [seller, buyer, productIdentifuer, amount]);
    return rows;
};

export { getAllProducts, getOneProduct, createOneProduct, buyOneProduct, sellOneProduct }