// Note that this is a mutating function!
// O(1)
export function swapArrayValues(
	array: Array<number>,
	index1: number,
	index2: number,
) {
	const value1 = array[index1]
	const value2 = array[index2]
	array[index1] = value2
	array[index2] = value1

	return array
}
