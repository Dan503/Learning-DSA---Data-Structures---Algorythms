{
	// Start with an unsorted array
	const arrayToBeSorted = [64, 34, 5, 12, 22, 11, 90, 25]

	// initial:
	// { 64, 34, 5, 12, 22, 11, 90, [25] }
	const newPivotIndex = quickSortSinglePass(arrayToBeSorted)

	/* Low group */
	{
		// first pass, {next sorting group}:
		// {5, 12, 22, [11]}, <25>, 34, 90, 64

		const lowGroupPivot = quickSortSinglePass(
			arrayToBeSorted,
			0,
			newPivotIndex - 1,
		)

		// {[5]}, <11>, 22, 12, <25>, 34, 90, 64

		const lowLowGroup = quickSortSinglePass(
			arrayToBeSorted,
			0,
			lowGroupPivot - 1,
		)

		// <5>, <11>, {22, [12]}, <25>, 34, 90, 64

		const lowHighGroup = quickSortSinglePass(
			arrayToBeSorted,
			lowGroupPivot + 1,
			newPivotIndex - 1,
		)

		// <5>, <11>, <12>, 22, <25>, 34, 90, 64

		debugger
	}

	/* High group */
	{
		// Second pass, {next sorting group}
		// <5>, <11>, <12>, 22, <25>, {34, 90, [64]}

		const highGroupPivot = quickSortSinglePass(
			arrayToBeSorted,
			newPivotIndex + 1,
			arrayToBeSorted.length - 1,
		)

		// <5>, <11>, <12>, 22, <25>, {34}, <64>, 90

		const lowLowGroup = quickSortSinglePass(
			arrayToBeSorted,
			newPivotIndex + 1,
			highGroupPivot - 1,
		)

		// <5>, <11>, <12>, 22, <25>, <34>, <64>, {90}

		const lowHighGroup = quickSortSinglePass(
			arrayToBeSorted,
			highGroupPivot + 1,
			arrayToBeSorted.length - 1,
		)

		// <5>, <11>, <12>, 22, <25>, <34>, <64>, <90>

		debugger
	}

	// 3rd pass result
	// 5, 11, 22, 12, 25, 34, 64, 90

	function quickSortSinglePass(
		array: Array<number>,
		minIndex = 0,
		maxIndex = array.length - 1,
	): number {
		// take the last element as the pivot (doesn't have to be last but all the tutorials use the last element)

		const pivotIndex = maxIndex // 7
		const pivotValue = array[pivotIndex] // 25

		let numberOfSmallerValuesSoFar = 0

		for (let index = minIndex; index < maxIndex; index++) {
			const currentValue = array[index]

			// compare with the pivot, greater or equal values are skipped
			if (currentValue >= pivotValue) {
				continue
			}

			// correct position index is incremented
			numberOfSmallerValuesSoFar++

			// -1 because arrays are zero based, think of it like how you have to use (arr.length -1) instead of just (arr.length)
			const swappingIndex = minIndex + numberOfSmallerValuesSoFar - 1

			const swapValue = array[swappingIndex]

			// Mutate array by swapping the current value with the value currently in the lastSmallerElementIndex position
			array[index] = swapValue
			array[swappingIndex] = currentValue
		}

		const correctPositionIndex = minIndex + numberOfSmallerValuesSoFar
		// After all the swapping do one final swap moving pivot value into the position after the last smallest value
		const correctPositionValue = array[correctPositionIndex]

		// Mutate the array swapping pivot value with the value that is in the correct position
		array[correctPositionIndex] = pivotValue
		array[pivotIndex] = correctPositionValue

		console.log(array)

		return correctPositionIndex
	}
}
