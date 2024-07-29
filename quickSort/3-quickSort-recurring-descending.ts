// Sort the array in descending order
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

		// initial sort
		//1!)     {64,     34,   5,       12,    22,     11,   90, [25] }

		// sort lower half
		//2!v)    {64,     34,   [90]},  <25>,   22,     11,   5,   12
		//3!vv)   <90>,    34,    64,    <25>,   22,     11,   5,   12
		//4!v^)   <90>,   {34,   [64]},  <25>,   22,     11,   5,   12
		//5!v^v)  <90>,   <64>,  {34},   <25>,   22,     11,   5,   12
		//6!v^^)  <90>,   <64>,  <34>,   <25>,   22,     11,   5,   12

		// sort upper half
		//7!^)    <90>,   <64>,  <34>,   <25>,   {22,    11,   5,   [12] }
		//8!^v)   <90>,   <64>,  <34>,   <25>,   {22},  <12>,  5,   11
		//9!^^)   <90>,   <64>,  <34>,   <25>,   <22>,  <12>, {5, [11]}
		//10!^^V) <90>,   <64>,  <34>,   <25>,   <22>,  <12>, <11>, {5}
		//11!^^^) <90>,   <64>,  <34>,   <25>,   <22>,  <12>, <11>, <5>
		debugger

		if (minIndex >= maxIndex) {
			return
		}

		const newPivotIndex = quickSortSinglePass(array, minIndex, maxIndex)

		// lowGroup
		recursiveQuickSort(highOrLow + 'v', array, minIndex, newPivotIndex - 1)

		// highGroup
		recursiveQuickSort(highOrLow + '^', array, newPivotIndex + 1, maxIndex)
	}

	function quickSortSinglePass(
		array: Array<number>,
		minIndex = 0,
		maxIndex = array.length - 1,
	): number {
		// take the last element as the pivot (doesn't have to be last but all the tutorials use the last element)

		const pivotIndex = maxIndex // 7
		const pivotValue = array[pivotIndex] // 25

		let numberOfLargerValuesSoFar = 0

		for (let index = minIndex; index < maxIndex; index++) {
			const currentValue = array[index]

			// compare with the pivot, greater or equal values are skipped
			if (currentValue <= pivotValue) {
				continue
			}

			// correct position index is incremented
			numberOfLargerValuesSoFar++

			// -1 because arrays are zero based, think of it like how you have to use (arr.length -1) instead of just (arr.length)
			const swappingIndex = minIndex + numberOfLargerValuesSoFar - 1

			const swapValue = array[swappingIndex]

			// Mutate array by swapping the current value with the value currently in the lastSmallerElementIndex position
			array[index] = swapValue
			array[swappingIndex] = currentValue
		}

		const correctPositionIndex = minIndex + numberOfLargerValuesSoFar
		// After all the swapping do one final swap moving pivot value into the position after the last smallest value
		const correctPositionValue = array[correctPositionIndex]

		// Mutate the array swapping pivot value with the value that is in the correct position
		array[correctPositionIndex] = pivotValue
		array[pivotIndex] = correctPositionValue

		return correctPositionIndex
	}
}
