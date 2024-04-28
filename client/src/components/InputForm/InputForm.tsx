import { Input, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { ListOfIngredients } from '../ListOfIngredients/ListOfIngredients';
import { GetRecipes } from "./getRecipes";

export function InputForm() {
	const [ingredients, setIngredients] = useState<string[]>([]);
	const [numberOfRecipes, setNumberOfRecipes] = useState<number>(0);

	return (
		<form className="flex flex-col items-end w-1/2 m-auto" onSubmit={(event) => GetRecipes(event, ingredients, numberOfRecipes)}>
			<label htmlFor="ingredients" className="self-start mb-2">Enter Ingredients (english only):</label>
			<ListOfIngredients ingredients={ingredients} setIngredients={setIngredients} />
			<label htmlFor="recipes" className="self-start mb-2" id="ingredients">Number of Recipes (1 - 10):</label>
			<Input
				type="number"
				placeholder="Enter number of recipes"
				className="mb-3 p-3 border-2 border-gray-300"
				fullWidth
				id="recipes"
				required
				onChange={(e) => setNumberOfRecipes(parseInt(e.target.value))}
				inputProps={{ min: 1, max: 10 }}
			/>
			<Button endIcon={<SendIcon />} variant="contained" color="primary" className="relative m-3 p-3 right-0" type="submit">
				Submit
			</Button>
		</form >
	)
}