import { Dispatch, SetStateAction } from "react";

export function AddToList(
	inputVal: string,
	setIngredients: Dispatch<SetStateAction<string[]>>,
	setInputVal: Dispatch<SetStateAction<string>>
) {
	setIngredients(prevIngredients => {
		if (inputVal === '') {
			alert('Ingredient cannot be empty');
			return prevIngredients;
		}
		if (prevIngredients.includes(inputVal)) {
			alert('This ingredient has already been added');
			return prevIngredients;
		}
		return [...prevIngredients, inputVal];
	})
	setInputVal('');
}