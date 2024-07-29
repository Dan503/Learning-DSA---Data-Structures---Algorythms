{
	// Start with an unsorted array
	const arrayToBeSorted = [64, 34, 5, 12, 22, 11, 90, 25]

	let recursion = 0

	recursiveQuickSort('!', arrayToBeSorted)

	console.log(arrayToBeSorted)
	debugger

	function recursiveQuickSort(
		highOrLow: string,
		array: Array<number>,
		minIndex = 0,
		maxIndex = array.length - 1,
	) {
		recursion++

		if (minIndex >= maxIndex) {
			return
		}

		// initial sort
		//1!)  { 64,   34,   5,    12,     22,  11, 90, [25] }

		// sorting of the lower half
		//2!v)  { 5,   12,   22,  [11]},  <25>, 34, 90, 64
		//3!vv)  {5}, <11>,  22,   12,    <25>, 34, 90, 64
		//4!v^)  <5>, <11>, {22,  [12]},  <25>, 34, 90, 64
		//5!v^v) <5>, <11>, <12>, {22},   <25>, 34, 90, 64
		//6!v^^) <5>, <11>, <12>, <22>,   <25>, {34, 90, [64]}

		// sorting of the upper half
		//7!^)   <5>, <11>, <12>, <22>,   <25>, {34}, <64>, 90
		//8!^v)  <5>, <11>, <12>, <22>,   <25>, <34>, <64>, {90}
		//9!^^)  <5>, <11>, <12>, <22>,   <25>, <34>, <64>, <90>

		const newPivotIndex = quickSortSinglePass(array, minIndex, maxIndex)

		// lowGroup
		recursiveQuickSort(highOrLow + 'v', array, minIndex, newPivotIndex - 1)

		// highGroup
		recursiveQuickSort(highOrLow + '^', array, newPivotIndex + 1, maxIndex)
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

		return correctPositionIndex
	}
}
