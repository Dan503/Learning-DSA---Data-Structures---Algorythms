import { quickSortSinglePass } from './1-quickSort-singlePass.ts'

let recursion = 0

recursiveQuickSortDescending('!', [64, 34, 5, 12, 22, 11, 90, 25])

/**
 * Most cases: `O(n.log n)`
 *
 * Worst case: `O(n^2)`
 *
 * **== Rules for using quickSort ==**
 * - A fantastic general purpose sorting algorithm
 * - Bad performance if you run this on an already sorted array
 */
export function recursiveQuickSortDescending(
	highOrLow: string,
	array: Array<number>,
	minIndex = 0,
	maxIndex = array.length - 1,
) {
	recursion++

	// initial sort
	//1!)     {64,     34,   5,       12,    22,     11,   90, [25] }

	// sort lower half
	//2!v)    {64,     34,   [90]},  <25>,   22,     11,   5,   12
	//3!vv)   <90>,    34,    64,    <25>,   22,     11,   5,   12
	//4!v^)   <90>,   {34,   [64]},  <25>,   22,     11,   5,   12
	//5!v^v)  <90>,   <64>,  {34},   <25>,   22,     11,   5,   12
	//6!v^^)  <90>,   <64>,  <34>,   <25>,   22,     11,   5,   12

	// sort upper half
	//7!^)    <90>,   <64>,  <34>,   <25>,   {22,    11,   5,   [12] }
	//8!^v)   <90>,   <64>,  <34>,   <25>,   {22},  <12>,  5,   11
	//9!^^)   <90>,   <64>,  <34>,   <25>,   <22>,  <12>, {5, [11]}
	//10!^^V) <90>,   <64>,  <34>,   <25>,   <22>,  <12>, <11>, {5}
	//11!^^^) <90>,   <64>,  <34>,   <25>,   <22>,  <12>, <11>, <5>
	// debugger

	if (minIndex >= maxIndex) {
		return
	}

	const newPivotIndex = quickSortSinglePass(array, minIndex, maxIndex)

	// lowGroup
	recursiveQuickSortDescending(
		highOrLow + 'v',
		array,
		minIndex,
		newPivotIndex - 1,
	)

	// highGroup
	recursiveQuickSortDescending(
		highOrLow + '^',
		array,
		newPivotIndex + 1,
		maxIndex,
	)

	return array
}
