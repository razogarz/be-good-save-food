import requests

from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .validators import validateIngredients

@csrf_exempt
def getRecipes(request):
	if request.method == 'GET':
		return HttpResponse("Hello, world. You're at the recipes getRecipes.")
	
	if request.method == 'POST':
		byte_body = request.body
		str_body = byte_body.decode('utf-8')
		body = eval(str_body)
		
		API_KEY = "b208f380b3f14a93adf507c2b28427d4"

		ingredients = body["ingredients"]
		numberOfRecipes = body["numberOfRecipes"]
		ingredientsString = ",".join(ingredients)

		recipesMatchingUrl = f"https://api.spoonacular.com/recipes/findByIngredients?ingredients={ingredientsString}&number={numberOfRecipes}&apiKey={API_KEY}"
		# make a request to the API
		recipesMatching = requests.get(recipesMatchingUrl, params=request.GET)
		recipesMatchingJson = recipesMatching.json()

		itemsids = []
		for recipe in recipesMatchingJson:
			itemsids.append(recipe["id"])
		itemsIdsString = ",".join(map(str, itemsids))
		nutritionInfoUrl = f"https://api.spoonacular.com/recipes/informationBulk?ids={itemsIdsString}&includeNutrition=true&apiKey={API_KEY}"
		nutritionInfo = requests.get(nutritionInfoUrl)
		nutritionInfoJson = nutritionInfo.json()


		# # return JsonResponse(nutritionInfoJson)
		responseData = []
		for index in range(len(nutritionInfoJson)):
				dictionary = {}
				dictionary["Suggestions"] = recipesMatchingJson[index]
				dictionary["Nutrition"] = nutritionInfoJson[index]
				responseData.append(dictionary)

		return JsonResponse({'data': responseData})

		# return JsonResponse(responseData)

		


