import { Card, CardHeader, CardMedia, CardContent, CardActions } from "@mui/material";
import { Recipe } from "../../pages/RecipesList/recipeInterfaces";

export function RecipeCard(
	props: {
		suggestion: Recipe['Suggestions'],
		nutrition: Recipe['Nutrition']['nutrition'],
		readyIn: number,
		sourceUrl: string
	}
) {
	const { suggestion, nutrition, readyIn, sourceUrl } = props;
	return (
		<Card key={suggestion.id} className="m-4 flex flex-col justify-between self-center" style={{ width: 345, boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', border: '1px solid #e0e0e0' }}>
			<div>
				<CardHeader title={suggestion.title} subheader={"Ready in " + readyIn + " minutes"}
					sx={{ overflow: 'scroll', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
				/>
				<CardMedia
					component="img"
					sx={{
						backgroundSize: 'contain',
						height: "200px",
						width: "100%",
						objectFit: 'fit',
					}}
					image={suggestion.image}
					alt={suggestion.title}
				/>
				<CardContent
					sx={{
						overflow: 'scroll',
						maxHeight: '150px',
					}}
				>
					<div>
						<div className="font-bold">Used Ingredients {"(" + suggestion.usedIngredientCount + ")"}:</div> {suggestion.usedIngredients.map(
							(ingredient) => ingredient.name
						).join(', ')}</div>
					<div><div className="font-bold">Missing Ingredients {"(" + suggestion.missedIngredientCount + ")"}:</div> {suggestion.missedIngredients.map(
						(ingredient) => ingredient.name
					).join(', ')}</div>
					<div>
						<span className="font-bold">
							Carbs:
						</span>
						{nutrition.nutrients.filter((nutrient) => nutrient.name === 'Carbohydrates')[0].amount + " g"}
					</div>
					<div>
						<span className="font-bold">
							Protein:
						</span>
						{nutrition.nutrients.filter((nutrient) => nutrient.name === 'Protein')[0].amount + " g"}
					</div>
					<div>
						<span className="font-bold">
							Calories:
						</span>
						{nutrition.nutrients.filter((nutrient) => nutrient.name === 'Calories')[0].amount + " kcal"}
					</div>
				</CardContent>
			</div>
			<CardActions className="flex justify-center">
				<a href={sourceUrl} target="_blank" rel="noreferrer">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						See Recipe
					</button>
				</a>
			</CardActions>
		</Card>
	)
}