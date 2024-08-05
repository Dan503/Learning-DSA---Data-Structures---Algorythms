// O(n)
export function gatherIntoCountingArray(array: Array<number>): Array<number> {
	const countingArray: Array<number> = []

	// 7 numbers with a range of 5 (0 to 4)
	// array = [ 4, 1, 3, 4, 3, 4, 1 ]

	// How the values get gathered:

	//                     --- Collection---
	// 	                 = 0  1  2  3  4 =
	// array = [           -----------------
	// 	4, // 1st 4 //   [ 0, 0, 0, 0, 1 ]
	// 	1, // 1st 1 //   [ 0, 1, 0, 0, 1 ]
	// 	3, // 1st 3 //   [ 0, 1, 0, 1, 1 ]
	// 	4, // 2nd 4 //   [ 0, 1, 0, 1, 2 ]
	// 	3, // 2nd 3 //   [ 0, 1, 0, 2, 2 ]
	// 	4, // 3rd 4 //   [ 0, 1, 0, 2, 3 ]
	// 	1, // 2nd 1 //   [ 0, 2, 0, 2, 3 ]
	// ]
	array.forEach((number) => {
		countingArray[number] = countingArray[number]
			? countingArray[number] + 1
			: 1
	})

	return countingArray
}
