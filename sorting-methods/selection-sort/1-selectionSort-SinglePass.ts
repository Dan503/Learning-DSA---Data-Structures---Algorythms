import { swapArrayValues } from '../../utils/utils.ts'

// O(n) x O(n) = O(n^2)
export function selectionSortSinglePass(
	array: Array<number>,
	numberOfElementsMoved: number,
): Array<number> {
	const lowestNumberIndex = findLowestNumber(array, numberOfElementsMoved) // O(n)
	moveLowestToFront(array, lowestNumberIndex, numberOfElementsMoved) // O(n)
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

	return lowestNumberIndex || 0
}

// O(n)
function moveLowestToFront(
	array: Array<number>,
	lowestNumberIndex: number,
	numberOfElementsMoved = 0,
) {
	// loop from lowestNumberIndex down to index of how many elements have been moved so far
	for (
		let index = lowestNumberIndex;
		index > numberOfElementsMoved;
		index--
	) {
		// >> swap lowestNumber with the previous value until you reach then end of the loop
		if (index > 0) {
			swapArrayValues(array, index, index - 1)
		}
	}
}

selectionSortSinglePass([7, 12, 9, 11, 3], 0)
