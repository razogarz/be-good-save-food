import { Router, Request, Response } from 'express';
import { ingredientsValidator } from './validators/ingredients';
import { validationResult } from 'express-validator';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

router.post('/', ingredientsValidator, async (req: Request, res: Response) => {
	const errorsValidating = validationResult(req);
	if (!errorsValidating.isEmpty()) {
		return res.status(400).json({ errors: errorsValidating.array() });
	}

	const { ingredients, numberOfRecipes } = req.body;
	const ingredientsString = ingredients.join(',');

	// // This is where the magic happens
	const url = `https://api.spoonacular.com/recipes/findByIngredients?
		ingredients=${ingredientsString}&
		number=${numberOfRecipes}&
		apiKey=${process.env.API_KEY}
	`;
	const response = await fetch(url);
	const data = await response.json();

	res.json(data);
});

export default router;