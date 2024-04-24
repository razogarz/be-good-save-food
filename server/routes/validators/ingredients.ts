import { body } from 'express-validator';

export const ingredientsValidator = [
	body('ingredients').isArray().withMessage('Ingredients must be an array'),
	body('ingredients.*').isString().withMessage('Each ingredient must be a string'),	
];