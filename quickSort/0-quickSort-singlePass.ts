{
	// Start with an unsorted array
	const arrayToBeSorted = [64, 34, 5, 12, 22, 11, 90, 25]

	// single pass

	// take the last element as the pivot (doesn't have to be last but all the tutorials use the last element)
	// in this case 25 at index 7

	const pivotIndex = arrayToBeSorted.length - 1 // 7
	const pivotValue = arrayToBeSorted[pivotIndex] // 25

	// | = position in array
	let numberOfSmallerValuesSoFar = 0

	for (let index = 0; index < arrayToBeSorted.length; index++) {
		const currentValue = arrayToBeSorted[index]

		// Array at start of iteration
		//0| (64), 34, 5, 12, 22, 11, 90, [25] no 64 > 25
		//1| 64, (34), 5, 12, 22, 11, 90, [25] no 34 > 25
		//2| 64, 34, (5), 12, 22, 11, 90, [25] YES! 5 < 25
		//3  5|, 34, 64, (12), 22, 11, 90, [25] YES! 12 < 25
		//4  5, 12|, 64,  34, (22), 11, 90, [25] YES! 22 < 25
		//5  5, 12, 22|, 34, 64, (11), 90, [25] YES! 11 < 25
		//6  5, 12, 22, 11|, 64,  34, (90), [25] no 90 > 25
		//7  5, 12, 22, 11|, 64,  34, 90, ([25]) no 25 = 25

		// compare with the pivot, greater or equal values are skipped
		if (currentValue >= pivotValue) {
			continue
		}

		// correct position index is incremented
		numberOfSmallerValuesSoFar++
		//0| (64), 34,  5,  12, 22, 11, 90, [25] << initial state for comparison
		//2   64|, 34, (5), 12, 22, 11, 90, [25]
		//3    5, 34|, 64, (12), 22, 11, 90, [25]
		//4    5, 12, 64|,  34, (22), 11, 90, [25]
		//5    5, 12, 22, 34|, 64, (11), 90, [25]

		const valueCurrentlyInPositionRelativeToTheNumberOfSmallerValues =
			// -1 because arrays are zero based, think of it like how you have to use (arr.length -1) instead of just (arr.length)
			arrayToBeSorted[numberOfSmallerValuesSoFar - 1]

		// Mutate array by swapping the current value with the value currently in the lastSmallerElementIndex position
		arrayToBeSorted[index] =
			valueCurrentlyInPositionRelativeToTheNumberOfSmallerValues
		arrayToBeSorted[numberOfSmallerValuesSoFar - 1] = currentValue
		{
			// index = 2
			//2 <64>|, 34, (5), 12, 22, 11, 90, [25]
			//2 (5)|, 34, <64>, 12, 22, 11, 90, [25]
		}
		{
			// index = 3
			//3 5, <34>|, 64, (12), 22, 11, 90, [25]
			//3 5, (12)|, 64, <34>, 22, 11, 90, [25]
		}
		{
			// index = 4
			//4 5, 12, <64>|, 34, (22), 11, 90, [25]
			//4 5, 12, (22)|, 34, <64>, 11, 90, [25]
		}
		{
			// index = 5
			//5 5, 12, 22, <34>|, 64, (11), 90, [25]
			//5 5, 12, 22, (11)|, 64, <34>, 90, [25]
		}
	}

	// After all the swapping do one final swap moving pivot value into the position after the last smallest value
	const correctPositionValue = arrayToBeSorted[numberOfSmallerValuesSoFar]

	// Mutate the array swapping pivot value with the value that is in the correct position
	arrayToBeSorted[numberOfSmallerValuesSoFar] = pivotValue
	arrayToBeSorted[pivotIndex] = correctPositionValue

	// pivot swaps with the number at the index based on how many smaller values there were in the array
	// 5, 12, 22, 11|, <64>, 34, 90, [25]
	// 5, 12, 22, 11|, [25], 34, 90, <64>

	console.log(arrayToBeSorted)
}
