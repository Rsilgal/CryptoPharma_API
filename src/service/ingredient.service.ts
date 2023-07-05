import { pool } from "../config/mysql";
import { Ingredient } from "../interfaces/DB/ingredient.interface";

const getAllIngredients = async () => {
    const [rows] = await pool.query<Ingredient[]>("SELECT * FROM ingredients");
    return rows;
};

const getOneIngredient = async (ingredientIdentifier: number) => {
    const [rows] = await pool.query<Ingredient[]>("SELECT * FROM ingredients WHERE ingredientId = ?", [ingredientIdentifier]);
    return rows;
};

const createOneIngredient = async (ingredient: Ingredient) => {
    const { name, description } = ingredient;
    const [rows] = await pool.query<Ingredient[]>("INSERT INTO ingredients (name, description) VALUES (?,?", [name, description]);
    return rows;
};

const deleteOneIngredient = async (ingredientIdentifier: number) => {
    const [rows] = await pool.query<Ingredient[]>("DELETE TO ingredients WHERE IngredientId = ?", [ingredientIdentifier]);
    return rows
};

const updateOneIngredient = async (ingredientIdentifier: number, newIngredient: Ingredient) => {
    const [ingredients] = await getOneIngredient(ingredientIdentifier);
    const { name, description }: Ingredient = { ...ingredients[0], ...newIngredient };
    const [rows] = await pool.query<Ingredient[]>("UPDATE ingredients SET Name = ?, Description = ? WHERE IngredienteId = ?", [name, description, ingredientIdentifier]);
    return rows;
};

export { getAllIngredients, getOneIngredient, createOneIngredient, deleteOneIngredient, updateOneIngredient }