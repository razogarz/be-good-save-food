from .utils.functions import get_data_from_spoonful
from django.http import JsonResponse
from dotenv import load_dotenv
import os


def get_recipes(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Route not found'}, status=404)

    ingredients = request.GET.get('ingredients')
    number_of_recipes = request.GET.get('number')

    load_dotenv()
    api_key = os.getenv("API_KEY")
    api_url = os.getenv("API_URL")

    recipes_matching_json, nutrition_info_json = get_data_from_spoonful(ingredients, number_of_recipes, api_key, api_url)

    response_data = []
    for index in range(len(nutrition_info_json)):
            dictionary = {"Suggestions": recipes_matching_json[index], "Nutrition": nutrition_info_json[index]}
            response_data.append(dictionary)

    return JsonResponse({'data': response_data})



		


