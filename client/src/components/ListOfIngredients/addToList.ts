import { Dispatch, SetStateAction } from "react";

export function AddToList(
	inputVal: string,
	setIngredients: Dispatch<SetStateAction<string[]>>,
	setInputVal: Dispatch<SetStateAction<string>>
) {
	let result: string[] = [];
	setIngredients(prevIngredients => {
		if (inputVal === '') {
			result = prevIngredients;
			alert('Ingredient cannot be empty');
			return prevIngredients;
		}
		if (prevIngredients.includes(inputVal)) {
			result = prevIngredients;
			alert('This ingredient has already been added');
			return prevIngredients;
		}
		result = [...prevIngredients, inputVal];
		return [...prevIngredients, inputVal];
	});
	setInputVal('');
	return result;
}