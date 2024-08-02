import { swapArrayValues } from '../../utils/utils.ts'

// O(n) x O(1) = O(n)
export function selectionSortSinglePass(
	array: Array<number>,
	numberOfElementsMoved: number,
): Array<number> {
	const lowestNumberIndex = findLowestNumber(array, numberOfElementsMoved) // O(n)
	moveLowestToFront(array, lowestNumberIndex, numberOfElementsMoved) // O(1)
	return array
}

// O(n)
function findLowestNumber(array: Array<number>, startingIndex: number): number {
	let lowestNumber = null
	let lowestNumberIndex = null

	for (let index = startingIndex; index < array.length - 1; index++) {
		const thisElement = array[index]
		const nextElement = array[index + 1]
		const low: { number: number; index: number } =
			thisElement < nextElement
				? { number: thisElement, index: index }
				: { number: nextElement, index: index + 1 }

		if (lowestNumber === null || low.number < lowestNumber) {
			lowestNumber = low.number
			lowestNumberIndex = low.index
		}
	}

	return lowestNumberIndex || startingIndex
}

// O(1)
function moveLowestToFront(
	array: Array<number>,
	lowestNumberIndex: number,
	numberOfElementsMoved = 0,
) {
	// We can just swap the values without having to shift all the values because the high values have not been sorted yet
	swapArrayValues(array, lowestNumberIndex, numberOfElementsMoved)
}

selectionSortSinglePass([7, 12, 9, 11, 3], 0)
