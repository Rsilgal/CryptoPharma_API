import { Request, Response } from "express"
import { pool } from "../config/mysql"

const getPrescriptions = (req: Request, res: Response) => {
    try {
        res.send('Te devuelvo las prescripciones desde el contrato.')
    } catch (error) {

    }
}

const getPrescription = (req: Request, res: Response) => {
    try {
        res.send(`Te devuelvo la prescripcion desde el contrato. Con el id: ${req.params.id}`)
    } catch (error) {

    }
}

const createPrescription = (req: Request, res: Response) => {
    try {
        // const { body } = req;
        const { op1, op2 } = req.body;
        // pool.query('INSERT INTO latabla VALUES (?,?)', [op1, op2]);
        res.send(req.body);
    } catch (error) {

    }
}

export { getPrescription, getPrescriptions, createPrescription }