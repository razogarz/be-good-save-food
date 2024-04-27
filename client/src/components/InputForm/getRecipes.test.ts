import {test, expect} from "vitest";
import { handleResponse, areIngredientsValid } from "./getRecipes";

test("areIngredientsValid", () => {
	expect(areIngredientsValid([])).toBe(false);
	expect(areIngredientsValid(["tomato", "onion"])).toBe(true);
});

test("handleResponse", () => {
	expect(handleResponse({ errors: "error", data: [] })).toBe(false);
	expect(handleResponse({ errors: "", data: [] })).toBe(false);
	expect(handleResponse({ errors: "", data: ["recipe"] })).toBe(true);
});