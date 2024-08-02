import { quickSortSinglePass } from './0-quickSort-singlePass.ts'

let recursion = 0

recursiveQuickSortAscending('!', [64, 34, 5, 12, 22, 11, 90, 25])

export function recursiveQuickSortAscending(
	highOrLow: string,
	array: Array<number>,
	minIndex = 0,
	maxIndex = array.length - 1,
) {
	recursion++

	if (minIndex >= maxIndex) {
		return
	}

	// initial sort
	//1!)  { 64,   34,   5,    12,     22,  11, 90, [25] }

	// sorting of the lower half
	//2!v)  { 5,   12,   22,  [11]},  <25>, 34, 90, 64
	//3!vv)  {5}, <11>,  22,   12,    <25>, 34, 90, 64
	//4!v^)  <5>, <11>, {22,  [12]},  <25>, 34, 90, 64
	//5!v^v) <5>, <11>, <12>, {22},   <25>, 34, 90, 64
	//6!v^^) <5>, <11>, <12>, <22>,   <25>, {34, 90, [64]}

	// sorting of the upper half
	//7!^)   <5>, <11>, <12>, <22>,   <25>, {34}, <64>, 90
	//8!^v)  <5>, <11>, <12>, <22>,   <25>, <34>, <64>, {90}
	//9!^^)  <5>, <11>, <12>, <22>,   <25>, <34>, <64>, <90>

	const newPivotIndex = quickSortSinglePass(array, minIndex, maxIndex)

	// lowGroup
	recursiveQuickSortAscending(
		highOrLow + 'v',
		array,
		minIndex,
		newPivotIndex - 1,
	)

	// highGroup
	recursiveQuickSortAscending(
		highOrLow + '^',
		array,
		newPivotIndex + 1,
		maxIndex,
	)

	return array
}
