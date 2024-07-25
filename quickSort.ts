// [n] = pivot number
// <n> = number A
// (n) = number B
// ^n^ = high index number
// vnv = low index number

function partition(
	// array = v64v 34 25 12 22 11 90 [^5^]
	// array = 5 64 v25v 12 22 11 90 [^34^]
	array: Array<number>,
	lowIndex: number, // 0
	highIndex: number, // 7
) {
	const pivotValue = array[highIndex] // = [5] then [34]
	let indexA = lowIndex - 1 // -1 then 1

	// Am I able to be more efficient by modifying the indexB initial value?
	for (let indexB = 0; indexB < array.length; indexB++) {
		/* 1st time running partition */
		{
			// ==== (64) 34 25 12 22 11 90 [5] ====
			// indexB = 0
			// valB = array[indexB(0)] = 64
			// valB(64) <= pivotValue(5) ? false -> skip
			// ==== 64 (34) 25 12 22 11 90 [5] ====
			// indexB = 1
			// valB = array[indexB(1)] = 34
			// valB(34) <= pivotValue(5) ? false -> skip
			// ==== 64 34 (25) 12 22 11 90 [5] ====
			// 5 is the lowest value so I'll skip to...
			// ==== 64 34 25 12 22 11 90 ([5]) ====
			// indexB = 7
			// valB = array[indexB(7)] = 5
			// valB(5) <= pivotValue(5) ? true -> continue
		}

		/* 2nd time running partition */
		{
			// ==== (5) 64 v25v 12 22 11 90 [^34^] ====
			// indexB = 0
			// valB = array[indexB(0)] = 5
			/**** UP TO HERE ****/
		}

		if (array[indexB] <= pivotValue) {
			indexA += 1 // -1 --> 0
			// array = <64> 34 25 12 22 11 90 ([5])
			// valueA = array[indexA(0)] = 64
			// valueB array[indexB(7)] = 5
			const [valueA, valueB] = [array[indexA], array[indexB]]
			// Array mutation!
			array[indexA] = valueB // [0] 5
			array[indexB] = valueA // [7] 64
		}

		// ([5]) 34 25 12 22 11 90 <64>
	}

	// highIndex = 7
	// indexA+1 = 1
	// highVal = ^64^
	// aPlusVal = <34>
	// [5] <34> 25 12 22 11 90 ^64^
	const [highVal, aPlusVal] = [array[highIndex], array[indexA + 1]]
	// Array mutation!
	array[indexA + 1] = highVal
	array[highIndex] = aPlusVal
	// [5] ^64^ 25 12 22 11 90 <34>

	return indexA + 1 // = 1
}

function quickSortAscending(
	// v64v 34 25 12 22 11 90 ^5^
	// {
	// ^v5v^ 64 25 12 22 11 90 34 // low >> no effect
	// 5 v64v 25 12 22 11 90 ^34^ // high
	// }
	//
	array: Array<number>,
	lowIndex = 0,
	highIndex: number = array.length - 1,
) {
	// 0 < 7 true
	//
	if (lowIndex < highIndex) {
		// array = v64v 34 25 12 22 11 90 ^5^
		// array = 5 v64v 25 12 22 11 90 ^34^
		const pivotIndex = partition(array, lowIndex, highIndex)
		// pivotIndex = 1
		// array = [5] ^64^ 25 12 22 11 90 <34>

		// need to figure out what the correct functions are that go here:
		// array = ^v[5]v^ 64 25 12 22 11 90 34
		quickSortAscending(array, lowIndex, pivotIndex - 1) // low handler
		// array = 5 64 v25v 12 22 11 90 ^34^
		quickSortAscending(array, pivotIndex + 1, highIndex) // high handler
	}
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5]
quickSortAscending(arr)
console.log(arr)
