import axios from 'axios';

export async function GetRecipes(
	event: any,
	ingredients: string[],
	numberOfRecipes: number
) {
	event.preventDefault();
	const result = isDataValid(ingredients, numberOfRecipes);
	if(!result) return;

	const url = new URL(`http://localhost:8000/recipes/`);
	url.searchParams.append('ingredients', ingredients.join(','));
	url.searchParams.append('number', numberOfRecipes.toString());

	const response = await axios.get(url.toString())
			.then((response) => {
				return response.data.data;
			})
			.catch((error) => {
				return error.response.data;
			});

	handleResponse(response);
}

export function isDataValid(
	ingredients: string[],
	numberOfRecipes: number
 ):boolean {
	if(ingredients.length === 0){
		alert('Please enter ANY NUMBER of ingredients greater than 0');
		return false;
	}
	if(numberOfRecipes < 1 || numberOfRecipes > 10){
		alert('Please enter a number between 1 and 10');
		return false;
	}
	return true;
}

export function handleResponse(
	response: any
): boolean {
	if(response.errors){
		alert(response.errors);
		return false;
	}
	if(response.length === 0){
		alert("No recipes found. Enter more ingredients!");
		return false;
	}
	localStorage.setItem('recipes', JSON.stringify(response));
	window.location.href = '/recipes';
	return true;
}