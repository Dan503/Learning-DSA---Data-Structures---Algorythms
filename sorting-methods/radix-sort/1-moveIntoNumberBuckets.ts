export function moveIntoNumberBuckets(
	array: Array<number>,
	targetDigit: number,
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

	array.forEach((item) => {
		const stringVersion = String(item)
		const digit = parseInt(stringVersion[targetDigit - 1])
		numberBuckets[digit].push(item)
	})

	return numberBuckets
}

console.log(
	'moveIntoNumberBuckets',
	moveIntoNumberBuckets(
		[566, 574, 399, 379, 338, 510, 372, 350, 505, 215],
		3,
	),
)
