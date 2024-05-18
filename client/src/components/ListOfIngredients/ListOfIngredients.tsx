import { Input, Button } from "@mui/material";
import { Dispatch, useState, SetStateAction } from "react";
import { AddToList } from "./addToList";

export function ListOfIngredients(
	props: {
		ingredients: string[],
		setIngredients: Dispatch<SetStateAction<string[]>>
	}
) {
	const { ingredients, setIngredients } = props;
	const [inputVal, setInputVal] = useState<string>('');

	return (
		<div className="w-full">
			<div className="flex w-full">
				<Input
					type="text"
					placeholder="Enter ingredient (e.g. apple)"
					className="p-3 border-2 border-gray-300"
					fullWidth
					value={inputVal}
					onChange={(e) => setInputVal(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							AddToList(inputVal, setIngredients, setInputVal);
						}
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						AddToList(inputVal, setIngredients, setInputVal);
					}}
					sx={{ padding: '15px' }}
				>
					Add
				</Button>
			</div>
			<label htmlFor="ingredients-list" className="self-start mb-2">Your list:</label>
			<div className="my-3 h-48 overflow-scroll px-2 bg-slate-100 rounded-md" id="ingredients-list">
				{ingredients?.map((ingredient, index) => {
					return (
						<div key={index} className="flex justify-between items-center p-2 bg-gray-200 my-2 rounded-lg">
							<p>{ingredient}</p>
							<Button
								onClick={() => setIngredients(ingredients.filter((_, i) => i !== index))}
								variant="contained"
								color="error"
								size="small"
							>
								Remove
							</Button>
						</div>
					)
				})}
			</div>
		</div >)
}

