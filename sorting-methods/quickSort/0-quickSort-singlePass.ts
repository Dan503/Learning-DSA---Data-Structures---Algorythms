// Start with an unsorted array
quickSortSinglePass([64, 34, 5, 12, 22, 11, 90, 25])

export function quickSortSinglePass(
	arrayToBeSorted: Array<number>,
	minIndex = 0,
	maxIndex = arrayToBeSorted.length - 1,
): number {
	// take the last element as the pivot (doesn't have to be last but all the tutorials use the last element)
	// in this case 25 at index 7

	const pivotIndex = maxIndex // 7
	const pivotValue = arrayToBeSorted[pivotIndex] // 25

	let numberOfSmallerValuesSoFar = 0

	for (let index = minIndex; index < maxIndex; index++) {
		const currentValue = arrayToBeSorted[index]

		// Array at start of iteration
		// "{v}" = target position in array (number of lower values so far is the index)
		//0{v} (64),  34,     5,     12,    22,   11,   90,   [25]   | 64 >= 25 ? yes, ignore
		//1{v}  64,  (34),    5,     12,    22,   11,   90,   [25]   | 34 >= 25 ? yes, ignore
		//2   {64v},  34,    (5),    12,    22,   11,   90,   [25]   | 5 >= 25 ? NO! target position incremented, move 5 to new target position
		//3    <5>,  {34v},   64,   (12),   22,   11,   90,   [25]   | 12 >= 25 ? NO! target position incremented, move 12 to new target position
		//4     5,   <12>,  {64v},   34,   (22),  11,   90,   [25]   | 22 >= 25 ? NO! target position incremented, move 22 to new target position
		//5     5,    12,   <22>,  {34v},   64,  (11),  90,   [25]   | 11 >= 25 ? NO! target position incremented, move 11 to new target position
		//6     5,    12,    22,  {<11>v},  64,   34,  (90),  [25]   | 90 >= 25 ? yes, ignore
		//7     5,    12,    22,  {<11>v},  64,   34,   90,  ([25])  | 25 >= 25 ? yes, ignore

		// compare with the pivot, greater or equal values are skipped
		if (currentValue >= pivotValue) {
			continue
		}

		// correct position index is incremented
		numberOfSmallerValuesSoFar++

		const swappingIndex = minIndex + numberOfSmallerValuesSoFar - 1

		const valueCurrentlyInPositionRelativeToTheNumberOfSmallerValues =
			// -1 because arrays are zero based, think of it like how you have to use (arr.length -1) instead of just (arr.length)
			arrayToBeSorted[swappingIndex]

		// Mutate array by swapping the current value with the value currently in the lastSmallerElementIndex position
		arrayToBeSorted[index] =
			valueCurrentlyInPositionRelativeToTheNumberOfSmallerValues
		arrayToBeSorted[swappingIndex] = currentValue
		{
			// index = 2
			//2)  {64v}, 34, (5), 12, 22, 11, 90, [25]
			//2)  {5v}, 34, (64), 12, 22, 11, 90, [25]
		}
		{
			// index = 3
			//3)  5, {34v},  64, (12), 22, 11, 90, [25]
			//3)  5, {12v}, 64, (34), 22, 11, 90, [25]
		}
		{
			// index = 4
			//4) 5, 12, {64v}, 34, (22), 11, 90, [25]
			//4) 5, 12, {22v}, 34, (64), 11, 90, [25]
		}
		{
			// index = 5
			//5) 5, 12, 22, {34v}, 64, (11), 90, [25]
			//5) 5, 12, 22, {11v}, 64, (34), 90, [25]
		}
	}

	// After all the swapping do one final swap moving pivot value into the correct position
	const correctPositionIndex = minIndex + numberOfSmallerValuesSoFar
	const correctPositionValue = arrayToBeSorted[correctPositionIndex]

	// Mutate the array swapping pivot value with the value that is in the correct position
	arrayToBeSorted[correctPositionIndex] = pivotValue
	arrayToBeSorted[pivotIndex] = correctPositionValue

	// pivot swaps with the number at the index based on how many smaller values there were in the array
	// 5, 12, 22, {11}, (64),   34, 90, [25]
	// 5, 12, 22, {11}, <[25]>, 34, 90, (64) // "25" is now locked in the correct position!

	return correctPositionIndex
}
