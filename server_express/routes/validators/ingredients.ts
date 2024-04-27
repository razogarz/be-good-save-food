import { body } from 'express-validator';

export const ingredientsValidator = [
	body("numberOfRecipes")
		.isNumeric()
		.isInt({ min: 1, max: 10 }),
	body("ingredients")
		.isArray()
		.isLength({ min: 1 })
		.isAlpha("en-US", { ignore: " " }),
];