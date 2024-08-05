// AKA a "Radix Array"
export type NumberBuckets = Array<Array<number>>

// O(n)
export function moveIntoNumberBuckets(
	array: Array<number>,
	numberLookUp: number,
) {
	const numberBuckets: Array<Array<number>> = [
		[], // 0
		[], // 1
		[], // 2
		[], // 3
		[], // 4
		[], // 5
		[], // 6
		[], // 7
		[], // 8
		[], // 9
	]

	// O(n)
	array.forEach((item) => {
		const digit = Math.floor(item / numberLookUp) % 10
		numberBuckets[digit].push(item)
	})

	return numberBuckets
}

console.log(
	'moveIntoNumberBuckets',
	moveIntoNumberBuckets([566, 574, 399, 379, 338, 510, 72, 350, 1, 215], 1),
)
