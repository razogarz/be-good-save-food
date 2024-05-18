import requests

def get_data_from_spoonful(ingredients, number_of_recipes, api_key, api_url):
    find_by_ingredients_url = f'{api_url}findByIngredients'
    information_bulk_url = f'{api_url}informationBulk'

    recipes_matching = requests.get(find_by_ingredients_url, params={ 'ingredients': ingredients, 'number': number_of_recipes, 'apiKey': api_key })
    recipes_matching_json = recipes_matching.json()

    items_ids = get_items_ids(recipes_matching_json)

    nutrition_info = requests.get(information_bulk_url, params={ 'ids': items_ids, 'includeNutrition': 'true', 'apiKey': api_key })
    nutrition_info_json = nutrition_info.json()

    return recipes_matching_json, nutrition_info_json

def get_items_ids(recipes_matching_json):
    items_ids = []
    for recipe in recipes_matching_json:
        items_ids.append(recipe["id"])
    items_ids_string = ",".join(map(str, items_ids))
    return items_ids_string