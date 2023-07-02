export interface Product {
    name: string,
    description: string,
    lot: string,
    quantity: number,
    expireDate: Date
    price: number
    pharmaService: boolean,
    hospitalService: boolean,
    needAuthorization: boolean
}