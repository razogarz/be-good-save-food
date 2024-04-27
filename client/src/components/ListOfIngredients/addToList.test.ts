import {expect, test} from "vitest";
import {AddToList} from "./addToList";
import { renderHook } from '@testing-library/react';
import { useState } from 'react';

test("addToList", () => {
	const { result } = renderHook(() => useState<string>('onion'));
	const [inputVal, setInputVal] = result.current;
	const { result: result2 } = renderHook(() => useState<string[]>([]));
	const [ingredients, setIngredients] = result2.current;

	expect(ingredients).toEqual([]);
	expect(inputVal).toEqual('onion');
	AddToList(inputVal, setIngredients, setInputVal);
});

test("addToList", () => {
	const { result } = renderHook(() => useState<string>('onion'));
	const [inputVal, setInputVal] = result.current;
	const { result: result2 } = renderHook(() => useState<string[]>([]));
	const [ingredients, setIngredients] = result2.current;

	const addResult = AddToList(inputVal, setIngredients, setInputVal);
	expect(addResult).toEqual(['onion']);
	const addResult2 = AddToList(inputVal, setIngredients, setInputVal);
	expect(addResult2).toEqual([]);
});