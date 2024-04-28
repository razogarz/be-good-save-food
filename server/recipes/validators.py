from django.http import JsonResponse

def validateIngredients(body):
	ingredients = body["ingredients"]

	if len(ingredients) == 0:
		return JsonResponse({"errors": "Please enter at least one ingredient."}, status=400)

	for ingredient in ingredients:
			if not (ingredient.isalpha() and len(ingredient) > 0):
					return JsonResponse({"errors": "Please enter only letters for ingredients."}, status=400)
	return JsonResponse({"message": "Ingredients are valid."}, status=200)