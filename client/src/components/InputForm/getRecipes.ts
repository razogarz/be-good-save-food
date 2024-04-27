import axios from 'axios';

export async function GetRecipes(
	event: React.FormEvent<HTMLFormElement>,
	ingredients: string[],
	numberOfRecipes: number
) {
	event.preventDefault();
	const result = areIngredientsValid(ingredients);
	if(!result) return;
	

	const url = `http://localhost:3000/recipes`;
	const data = {
		ingredients,
		numberOfRecipes,
	};

	const response = await axios.post(url, data)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error.response.data;
		});

	console.log(response);
		handleResponse(response);
}

export function areIngredientsValid(
	ingredients: string[],
 ):boolean {
	if(ingredients.length === 0){
		alert('Please enter ANY ingredients');
		return false;
	};
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