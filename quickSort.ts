function partition(
	array: Array<number>, // (4 1) 3 [2]
	lowIndex: number, // 0
	highIndex: number, // 3
) {
	const pivotValue = array[highIndex] // 2
	let indexA = lowIndex - 1 // -1

	array.forEach((_item, indexB) => {
		// indexB = 0
		// array[0] = 4
		// valB(4) <= pivot(2) ? false = skip
		// ==== (4) 1 3 [2] ==== 1st loop - skip
		// indexB = 1
		// array[1] = 1
		// valB(1) <= pivot(2) ? true
		// ==== 1 (4) 3 [2] ==== 2nd loop - modify
		// indexB = 2
		// array[2] = 4
		// valB(4) <= pivot(2) ? false = skip
		// ==== 1 4 (3) [2] ==== 3rd loop - skip
		// indexB = 3
		// valB = array[3] = 2
		// valB(2) <= pivot(2) ? true
		// ==== 2 4 3 1 ==== 4th loop - modify

		if (array[indexB] <= pivotValue) {
			indexA += 1 // -1 --> 0 {loop} 0 --> 1
			// array = <4> (1) 3 [2]
			// valueA = array[indexA(0)] = 4
			// valueB array[indexB(1)] = 1
			// ======
			// array = 1 <4> 3 ([2])
			// valueA = array[indexA(1)] = 4
			// valueB = array[indexB(3)] = 2
			const [valueA, valueB] = [array[indexA], array[indexB]]
			// Array mutation!
			array[indexA] = valueB // [0] 1 {loop} [1] 2
			array[indexB] = valueA // [1] 4 {loop} [3] 4

			// 2st loop = (1) (4) 3 [2]
			// ======
			// 4th loop = 1 (2) 3 (4)
		}
	})

	// highIndex = 3
	// indexA+1 =
	const [highVal, aPlusVal] = [array[highIndex], array[indexA + 1]]
	// Array mutation!
	array[indexA + 1] = highVal
	array[highIndex] = aPlusVal
	return indexA + 1
}

function quickSortAscending(
	array: Array<number>,
	lowIndex = 0,
	highIndex: number = array.length - 1,
) {
	if (lowIndex < highIndex) {
		debugger
		const pivotIndex = partition(array, lowIndex, highIndex)
		// need to figure out what the correct functions are that go here:
		// _________(array, low, pivotIndex - 1)
		// _________(array, pivotIndex + 1, highVal)
	}
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5]
quickSortAscending(arr)
console.log(arr)
