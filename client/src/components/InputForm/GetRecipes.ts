import axios from 'axios';

export async function GetRecipes(
	event: React.FormEvent<HTMLFormElement>,
	ingredients: string[],
	numberOfRecipes: number
) {
	event.preventDefault();

	const url = `http://localhost:3000/recipes`;
	const data = {
		ingredients,
		numberOfRecipes,
	};

	const response = await axios.post(url, data)
		.then((response) => {
			console.log(response);
			return response;
		})
		.catch((error) => {
			console.error(error);
			return error;
		});
	
	if(response.status !== 200){
		alert(response.data.errors[0].msg ?? 'An error occurred, please try again later');
		return;
	}

	if(response.data.length === 0){
		alert('Please enter some more ingredients');
		return;
	}

	window.location.href = '/recipes';
}
