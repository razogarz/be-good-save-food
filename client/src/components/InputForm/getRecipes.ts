import axios from 'axios';

export async function GetRecipes(
	event: React.FormEvent<HTMLFormElement>,
	ingredients: string[],
	numberOfRecipes: number
) {
	event.preventDefault();
	if(ingredients.length === 0){
		alert('Please enter ANY ingredients');
		return;
	};

	const url = `http://localhost:3000/recipes`;
	const data = {
		ingredients,
		numberOfRecipes,
	};

	axios.post(url, data)
		.then((response) => {
			if(response.data.length === 0){
				alert("No recipes found. Enter more ingredients!");
				return;
			}
			localStorage.setItem('recipes', JSON.stringify(response.data));
			window.location.href = '/recipes';
			return;
		})
		.catch((error) => {
			alert(error.response.data.errors)
			return;
		});
}
