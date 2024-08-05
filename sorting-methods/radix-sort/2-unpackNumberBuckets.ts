import { NumberBuckets } from './1-moveIntoNumberBuckets.ts'

// O(n)
export function unpackNumberBuckets(
	numberBuckets: NumberBuckets,
): Array<number> {
	const sortedValues: Array<number> = []

	numberBuckets.forEach((bucket) => {
		if (!bucket.length) {
			return
		}

		bucket.forEach((number) => {
			sortedValues.push(number)
		})
	})

	return sortedValues
}
