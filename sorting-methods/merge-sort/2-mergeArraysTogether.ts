/**
 * Note that `array1` and `array2` need to already be sorted
 * for mergeArrays to work properly.
 */
export function mergeArrays(
	array1: Array<number>,
	array2: Array<number>,
): Array<number> {
	let indexA = 0
	let indexB = 0
	const mergedArray: Array<number> = []

	while (indexA < array1.length || indexB < array2.length) {
		const itemA = array1[indexA]
		const itemB = array2[indexB]
		let lesserItem: number

		if (itemB === undefined || itemA < itemB) {
			lesserItem = itemA
			indexA++
		} else {
			lesserItem = itemB
			indexB++
		}

		mergedArray.push(lesserItem)
	}

	return mergedArray
}

// This is necessary if the arrays are not already sorted, they should be sorted already though
// This is basically just an insertion sort algorithm
// function injectValueIntoMergeArray(
// 	mergeArray: Array<number>,
// 	lesserItem: number,
// ) {
// 	for (let mergeIndex = 0; mergeIndex < mergeArray.length; mergeIndex++) {
// 		const thisMergeItem = mergeArray[mergeIndex]
// 		const nextMergeItem = mergeArray[mergeIndex + 1]

// 		const isLessThanNextMergeItem = nextMergeItem
// 			? lesserItem < nextMergeItem
// 			: true

// 		if (lesserItem > thisMergeItem && isLessThanNextMergeItem) {
// 			mergeArray.splice(mergeIndex + 1, 0, lesserItem)
// 			break
// 		}
// 	}
// }

console.log(mergeArrays([8, 9, 12], [3, 4, 5, 11]))
