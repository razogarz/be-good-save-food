// import { Recipe } from "./recipeInterfaces"
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { Recipe } from './recipeInterfaces';

export function RecipesListPage() {
	const recipes: Recipe[] = JSON.parse(localStorage.getItem('recipes') || '[]') as Recipe[];
	return (
		<div >
			<h1 className="text-2xl lg:text-5xl text-center italic p-3 m-3">
				Recipes found for you:
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{recipes?.map((_, index) => {
					const suggestion = recipes[index].Suggestions;
					const nutrition = recipes[index].Nutrition.nutrition;
					const readyIn = recipes[index].Nutrition.readyInMinutes;
					const sourceUrl = recipes[index].Nutrition.sourceUrl;

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
		</div >
	)
};

