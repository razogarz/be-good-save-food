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
		<Card className="m-4 flex flex-col justify-between self-center" style={{ width: 345, boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', border: '1px solid #e0e0e0' }}>
			<div key={suggestion.id}>
				<CardHeader
					title={suggestion.title} subheader={"Ready in " + readyIn + " minutes"}
					titleTypographyProps={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}
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

				>
					<div>
						<h6 className="font-bold">Used Ingredients {"(" + suggestion.usedIngredientCount + ")"}:</h6> {suggestion.usedIngredients.map(
							(ingredient) => ingredient.name
						).join(', ')}</div>
					<div>
						<h6 className="font-bold">Missing Ingredients {"(" + suggestion.missedIngredientCount + ")"}:</h6> {suggestion.missedIngredients.map(
							(ingredient) => ingredient.name
						).join(', ')}</div>
					<div>
						<h6 className="font-bold">
							Carbs:
						</h6>
						{nutrition.nutrients.filter((nutrient) => nutrient.name === 'Carbohydrates')[0].amount + " g"}
					</div>
					<div>
						<h6 className="font-bold">
							Protein:
						</h6>
						{nutrition.nutrients.filter((nutrient) => nutrient.name === 'Protein')[0].amount + " g"}
					</div>
					<div>
						<h6 className="font-bold">
							Calories:
						</h6>
						{nutrition.nutrients.filter((nutrient) => nutrient.name === 'Calories')[0].amount + " kcal"}
					</div>
				</CardContent>
			</div>
			<CardActions className="flex justify-center">
				<a href={sourceUrl} target="_blank" rel="noreferrer">
					<button className="text-white font-bold py-2 px-4 rounded-full bg-slate-800">
						See Recipe
					</button>
				</a>
			</CardActions>
		</Card>
	)
}