export interface createPrescriptionInterface {
    userIdentifier: number
    productIdentifier: number
    amountToTakeFromProduct: number
    coolDownToTakeOnHours: number
    productQuantityToTake: number
}