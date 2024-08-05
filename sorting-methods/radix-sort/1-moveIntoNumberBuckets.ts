// AKA a "Radix Array"
export type NumberBuckets = Array<Array<number>>

export function moveIntoNumberBuckets(
	array: Array<number>,
	targetDigit: number,
	maxDigit: number,
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
		const stringVersion = leadingZeros(item, maxDigit)
		const digit = parseInt(stringVersion[targetDigit - 1])
		numberBuckets[digit].push(item)
	})

	return numberBuckets
}

function leadingZeros(number: number, length: number): string {
	const stringVersion = String(number)
	if (stringVersion.length < length) {
		const zeros = new Array(length - stringVersion.length)
			.fill('0')
			.join('')
		return zeros + stringVersion
	}
	return stringVersion
}

console.log(
	'moveIntoNumberBuckets',
	moveIntoNumberBuckets(
		[566, 574, 399, 379, 338, 510, 72, 350, 1, 215],
		3,
		3,
	),
)
