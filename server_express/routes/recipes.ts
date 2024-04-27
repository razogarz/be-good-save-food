import { Router, Request, Response } from 'express';
import { ingredientsValidator } from './validators/ingredients';
import { validationResult } from 'express-validator';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

router.post('/', ingredientsValidator, async (req: Request, res: Response) => {
	const errorsValidating = validationResult(req);
	if (!errorsValidating.isEmpty()) {
		return res.status(400).json({ errors: "Invalid input data, check your list again (make sure products contain only roman letters)" });
	}

	const { ingredients, numberOfRecipes } = req.body;
	const ingredientsString = ingredients.join(',');

	// GET RECIPES
	const recipesMatchingUrl = `https://api.spoonacular.com/recipes/findByIngredients?
		ingredients=${ingredientsString}&
		number=${numberOfRecipes}&
		apiKey=${process.env.API_KEY}
	`;
	const response = await fetch(recipesMatchingUrl);
	const suggestionsData = await response.json();
	const ids = suggestionsData.map((recipe: any) => recipe.id);

	const recipesInfoUrl = `https://api.spoonacular.com/recipes/informationBulk?
		ids=${ids.join(',')}&
		includeNutrition=true&
		apiKey=${process.env.API_KEY}
	`;
	const recipesResponse = await fetch(recipesInfoUrl);
	const nutritionData = await recipesResponse.json();

	const data = suggestionsData.map((suggestion: any, index:number) => {
		const nutrition = nutritionData[index];
		return {
			Suggestions: suggestion,
			Nutrition: nutrition,
		};
	});

	res.json(data);
});

export default router;