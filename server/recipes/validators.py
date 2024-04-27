from django.http import JsonResponse

def validateIngredients(request):
	ingredients = request.GET.getlist('ingredients')

	if len(ingredients) == 0:
		return JsonResponse({"error": "Please enter at least one ingredient."})

	for ingredient in ingredients:
			if not ingredient.isalpha() and len(ingredient) > 0:
					return JsonResponse({"error": "Please enter only letters for ingredients."})
	return True