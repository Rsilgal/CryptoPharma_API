import { pool } from "../config/mysql";

const asignIngredientToProduct = async (ingredientIdentifier: number, productIdentifier: number, ingredientQuantity: number) => {
    const [rows] = await pool.query("INSERT INTO ingredientsinproduct (IdProduct, IdIngredient, ingredientsQuantity) VALUES (?,?,?)", [productIdentifier, ingredientIdentifier, ingredientQuantity]);
    return rows;
};

const updateIngredientToProduct = async (relationIdentifier: number, ingredientIdentifier: number, productIdentifier: number, ingredientQuantity: number) => {
    const [rows] = await pool.query("UPDATE ingredientsinproduct SET IdProduct = ?, IdIngredient = ?, ingredientsQuantity = ? WHERE Id = ?", [productIdentifier, ingredientIdentifier, ingredientQuantity, relationIdentifier]);
    return rows;
};

export { asignIngredientToProduct, updateIngredientToProduct }