import { Request, Response } from "express"
import { pool } from "../config/mysql"
import { contract } from "../config/web3";

const getProducts = (req: Request, res: Response) => {
    console.log('y a esto?');
    
    try {
        res.send('Te devuelvo los productos desde el contrato.')
    } catch (error) {
        console.log(error);
        
    }
}

const getProduct = (req: Request, res: Response) => {
    try {
        res.send(`Te devuelvo el producto desde el contrato. Con el id: ${req.params.id}`)
    } catch (error) {

    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        // const { body } = req;
        const { op1, op2 } = req.body;
        // const result = await contract.methods.totalSupply().call()
        // console.log(result);
        
        // pool.query('INSERT INTO latabla VALUES (?,?)', [op1, op2]);
        res.send(req.body);
    } catch (error) {

    }
}

const buyPorduct = (req: Request, res: Response) => {
    try {
        const { body } = req;
        res.send(body);
    } catch (error) {

    }
}

const sellProduct = (req: Request, res: Response) => {
    try {
        const { body } = req;
        res.send(body);
    } catch (error) {

    }
}

export { getProduct, getProducts, createProduct, buyPorduct, sellProduct}