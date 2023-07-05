export interface createProductInterface {
    name: string
    description: string
    lot : string
    isPharmaService: boolean
    isHospitalService: boolean
    needAuthorization: boolean
    quantity: number
    expireDate: string
    price: number
    amountToCreate: number
}