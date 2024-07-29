// [n] = pivot number
// <n> = number A
// (n) = number B
// ^n^ = high index number
// vnv = low index number

let partitionIteration = 0

function partition(
	// ! partition[1] = v64v 34 25 12 22 11 90 [^5^]
	// ^ partition[2] = 5 64 v25v 12 22 11 90 [^34^]
	// v partition[3] = 5 64 v25v 12 22 11 [^34^] 90
	// v partition[4] = 5 64 v25v 12 22 11 [^90^] 34 // <<-- BUG! 90 should not be moved to left of 34
	// v partition[5] = 5 64 v25v 12 22 11 34 90
	array: Array<number>,
	lowIndex: number,
	highIndex: number,
	handlerType: 'v low' | '^ high' | '! initial',
) {
	partitionIteration++
	const partitionInfo = `partition[${partitionIteration} ${handlerType}]`
	/* ! initial partition[1] */
	{
		// pivotValue = 5
		// indexA = -1
	}
	/* ^ partition[2] */
	{
		// highIndex = 7
		// lowIndex = 2
		// pivotValue = 34
		// indexA = 1
	}
	/* ^ partition[3] */
	{
		// highIndex = 6
		// lowIndex = 2
		// pivotValue = 34
		// indexA = 1
	}
	/* v partition[4] */
	{
		// highIndex = 6
		// lowIndex = 2
		// pivotValue = 90
		// indexA = 1
	}
	const pivotValue = array[highIndex]
	let indexA = lowIndex - 1

	for (let indexB = 0; indexB <= highIndex; indexB++) {
		/* ! initial partition[1] */
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

		/* ^ high partition[2] */
		{
			// ==== 5 64 (v25v) 12 22 11 90 [^34^] ====
			// indexB = 2
			// valB = array[indexB(2)] = 25
			// valB(25) <= pivotValue(34) ? true -> continue
		}

		if (array[indexB] <= pivotValue) {
			indexA += 1

			const [valueA, valueB] = [array[indexA], array[indexB]]
			const isAIndexHighWithLowValue = indexA > indexB && valueA < valueB
			const isBIndexHighWithLowValue = indexB > indexA && valueB < valueA

			if (isAIndexHighWithLowValue || isBIndexHighWithLowValue) {
				console.log('\nMUTATION!')
				logSwappedNumbers(
					'BEFORE',
					`loop[${indexB}]`,
					array,
					indexA,
					indexB,
				)
				// Array mutation!
				array[indexA] = valueB
				array[indexB] = valueA
				logSwappedNumbers(
					'AFTER',
					`loop[${indexB}]`,
					array,
					indexA,
					indexB,
				)
				console.log('')
			}
		}

		/* ! initial partition[1] */
		{
			// before = <v64v> 34 25 12 22 11 90 (^[5]^)
			// indexA = -1 -> 0
			// valueA = array[indexA(0)] = 64
			// valueB array[indexB(7)] = 5
			// after = ([5]) 34 25 12 22 11 90 <64>
		}
		/* ^ partition[2] */
		{
			// before = 5 64 (<v25v>) 12 22 11 90 [^34^]
			// Same result because same index for A and B
			// after = 5 64 (<v25v>) 12 22 11 90 [^34^]
			// ======= skip until 90 <-> 34 ======
			// before = 5 64 v25v 12 22 11 <90> ([^34^])
			// indexA = 6
			// indexB = 7
			// after = 5 64 v25v 12 22 11 ([^34^]) <90>
		}
		/* ^ partition[3] */
		{
			// before = 5 64 v25v 12 22 11 ^34^ [90]
			// Same result because same index for A and B
			// ======= skip until 90 <-> 34 ======
			// before = 5 64 v25v 12 22 11 <90> ([^34^])
			// indexA = 6
			// indexB = 7
			// after = 5 64 v25v 12 22 11 ([^34^]) <90>
		}
		logSwappedNumbers(
			'BEFORE',
			`End loop iteration[${indexB}]`,
			array,
			indexA,
			indexB,
		)
		debugger
	}

	const [highVal, aPlusVal] = [array[highIndex], array[indexA + 1]]
	const isHighIndexHigher = indexA + 1 < highIndex
	if (aPlusVal > highVal && isHighIndexHigher) {
		logSwappedNumbers('BEFORE', 'close', array, indexA + 1, highIndex)
		// Array mutation!
		array[indexA + 1] = highVal
		array[highIndex] = aPlusVal
		logSwappedNumbers('AFTER', 'close', array, indexA + 1, highIndex)
		console.log('')
	}

	return indexA + 1

	/* ! initial partition[1] */
	{
		// before = [5] <34> 25 12 22 11 90 ^64^
		// highIndex = 7
		// indexA+1 = 1
		// highVal = ^64^
		// aPlusVal = <34>
		// after = [5] ^64^ 25 12 22 11 90 <34>
	}
	/* ^ partition[2] */
	{
		// before = ^64^ [5] <25> 12 22 11 90 34
		// highIndex = 0
		// indexA+1 = 2
		// highVal = ^64^
		// aPlusVal = <25>
		// after = <25> [5] <64> 12 22 11 90 34
	}
	/* v partition[3] */ // This looks like a bug...
	{
		// before = 64 5 25 12 22 11 [^34^] <90>
		// highIndex = 6
		// indexA+1 = 7
		// highVal = ^34^
		// aPlusVal = <90>
		// after = 25 5 <64> 12 22 11 <90> [^34^]
	}
	/* v partition[4] */ // This looks like a bug...
	{
		// before = 64 5 25 12 22 11 [^90^] <34>
		// highIndex = 6
		// indexA+1 = 7
		// highVal = ^34^
		// aPlusVal = <90>
		// after = 25 5 <64> 12 22 11 <34> [^90^]
	}

	function logSwappedNumbers(
		stage: 'BEFORE' | 'AFTER',
		message: string,
		array: Array<number>,
		indexA: number,
		indexB: number,
	) {
		const aVal = (item: number) =>
			stage === 'BEFORE' ? `<${item}>` : `(${item})`
		const bVal = (item: number) =>
			stage === 'BEFORE' ? `(${item})` : `<${item}>`
		const arrayToPrint = array.map(
			(item, index) =>
				(index === indexA && aVal(item)) ||
				(index === indexB && bVal(item)) ||
				item,
		)

		console.log(`{${stage}}`, message, partitionInfo, arrayToPrint)
	}
}

function quickSortAscending(
	handlerType: 'v low' | '^ high' | '! initial',
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
		// ! before = v64v 34 25 12 22 11 90 ^5^
		const pivotIndex = partition(array, lowIndex, highIndex, handlerType)
		// ! pivotIndex = 1
		// ! after = [5] ^64^ 25 12 22 11 90 <34>

		// need to figure out what the correct functions are that go here:
		// partition[1] = ^v[5]v^ 64 25 12 22 11 90 34 { 5 < 5 ? false = SKIP}
		// partition[2] = 5 64 v25v 12 22 11 90 ^34^ { 2 < 6 ? true = apply}
		if (highIndex >= pivotIndex) {
			quickSortAscending('v low', array, lowIndex, pivotIndex - 1)
		}
		// mid = 5 64 v25v 12 22 11 90 ^34^
		quickSortAscending('^ high', array, pivotIndex + 1, highIndex)
		// after
	}
}

const arr = [64, 34, 25, 12, 22, 11, 90, 5]
quickSortAscending('! initial', arr)
console.log(arr)
