import { Request, Response } from "express"
import { buyOneProduct, createOneProduct } from "../service/products.service";

const getProducts = (req: Request, res: Response) => {

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

const createProduct = async ({ body }: Request, res: Response) => {
    try {
        const result = createOneProduct(body);
        res.send(body);
    } catch (error) {

    }
}

const buyProduct = ({ body }: Request, res: Response) => {
    try {
        const result = buyOneProduct(body);
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

export { getProduct, getProducts, createProduct, buyProduct, sellProduct }