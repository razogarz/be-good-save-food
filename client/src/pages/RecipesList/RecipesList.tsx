// import { Recipe } from "./recipeInterfaces"
import { Button } from '@mui/material';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { Recipe } from './recipeInterfaces';
import { Home } from '@mui/icons-material';

export function RecipesListPage() {
	const recipes: Recipe[] = JSON.parse(localStorage.getItem('recipes') || '[]') as Recipe[];
	const numOfRecipes = recipes.length;
	const randomImageNumber = Math.floor(Math.random() * numOfRecipes);
	const imageZero = recipes[randomImageNumber]?.Suggestions.image;

	return (
		<>
			<div
				style={{ '--img-url': `url(${imageZero})` }}
				className="fixed bg-[image:var(--img-url)] bg-cover
blur-md  w-full h-full 
">
			</div >
			<div className="absolute w-full">
				<nav className="flex items-center justify-between bg-white px-12 mb-6">
					<div></div>
					<h1 className="text-black-600 text-6xl py-3 italic">
						Recipes
					</h1>
					<Button
						variant='contained'
						sx={{ borderRadius: '100%', height: '50px', width: '50px', backgroundColor: '#0f0f0f' }}
						onClick={() => window.location.href = "/"}
					>
						<Home
						/>
					</Button>
				</nav>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
					{recipes?.map((recipe) => {
						const suggestion = recipe.Suggestions;
						const nutrition = recipe.Nutrition.nutrition;
						const readyIn = recipe.Nutrition.readyInMinutes;
						const sourceUrl = recipe.Nutrition.sourceUrl;

						return (
							<RecipeCard
								suggestion={suggestion}
								nutrition={nutrition}
								readyIn={readyIn}
								sourceUrl={sourceUrl}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
};

