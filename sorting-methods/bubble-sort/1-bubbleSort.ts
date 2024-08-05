import { bubbleSortSinglePass } from './0-bubbleSort-singlePass.ts'
// O(n) x O(n) = O(n^2)
export function bubbleSortContanerLoop(array: Array<number>) {
	// O(n)
	for (let index = 0; index < array.length; index++) {
		// O(n)
		bubbleSortSinglePass(array, array.length - index - 1)
	}
	return array
}
