export function splitArrayInHalf(array: Array<number>) {
	const divisionIndex = Math.floor(array.length / 2)
	const firstHalf = array.slice(0, divisionIndex)
	const secondHalf = array.slice(divisionIndex)

	return [firstHalf, secondHalf] as const
}
