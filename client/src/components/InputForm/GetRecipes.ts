import axios from 'axios';

export async function GetRecipes(
	event: React.FormEvent<HTMLFormElement>,
	ingredients: string[],
	numberOfRecipes: number
) {
	event.preventDefault();
	if(ingredients.length === 0){
		alert('Please enter some ingredients');
		return;
	};

	const url = `http://localhost:3000/recipes`;
	const data = {
		ingredients,
		numberOfRecipes,
	};

	const result = await axios.post(url, data)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error;
		});
	const axiosResponse = result.response;

	if(axiosResponse && axiosResponse.status !== 200){
		alert(axiosResponse.data.errors);
		return;
	}

	if(result.data.length === 0){
		alert('Please enter some more ingredients');
		return;
	}

	localStorage.setItem('recipes', JSON.stringify(result.data));
	window.location.href = '/recipes';
}
