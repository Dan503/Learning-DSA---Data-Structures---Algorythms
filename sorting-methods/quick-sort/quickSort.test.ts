import { assertEquals } from 'jsr:@std/assert@1/equals'
import { quickSortSinglePass } from './1-quickSort-singlePass.ts'
import { recursiveQuickSortAscending } from './2-quickSort-recurring-ascending.ts'
import { recursiveQuickSortDescending } from './3-quickSort-recurring-descending.ts'

Deno.test('quickSort non-recurring test', () => {
	// Start with an unsorted array
	const arrayToBeSorted = [64, 34, 5, 12, 22, 11, 90, 25]

	// initial:
	// { 64, 34, 5, 12, 22, 11, 90, [25] }

	// first pass
	const newPivotIndex = quickSortSinglePass(arrayToBeSorted)
	console.log('! 1st pass result', arrayToBeSorted)
	assertEquals(
		arrayToBeSorted,
		[5, 12, 22, 11, 25, 34, 90, 64],
		// {next sorting group = v}
		'[{5, 12, 22, [11]}, <25>, 34, 90, 64] - first pass; next = v',
	)

	/* Low group */
	// [{5, 12, 22, [11]}, <25>, 34, 90, 64]

	// 2nd pass v
	const lowGroupPivot = quickSortSinglePass(
		arrayToBeSorted,
		0,
		newPivotIndex - 1,
	)
	console.log('v 2nd pass result', arrayToBeSorted)
	assertEquals(
		arrayToBeSorted,
		[5, 11, 22, 12, 25, 34, 90, 64],
		// {next sorting group = vv}
		'[{5}, <11>, 22, 12, <25>, 34, 90, 64] - v 2nd pass; next = vv',
	)

	// 3rd pass vv
	quickSortSinglePass(arrayToBeSorted, 0, lowGroupPivot - 1)
	console.log('vv 3rd pass result', arrayToBeSorted)
	assertEquals(
		arrayToBeSorted,
		[5, 11, 22, 12, 25, 34, 90, 64],
		// {next sorting group = ^}
		'[<5>, <11>, {22, [12]}, <25>, 34, 90, 64] - vv 3rd pass; next = v^',
	)

	// 4th pass v^
	quickSortSinglePass(arrayToBeSorted, lowGroupPivot + 1, newPivotIndex - 1)
	console.log('v^ 4th pass result', arrayToBeSorted)
	assertEquals(
		arrayToBeSorted,
		[5, 11, 12, 22, 25, 34, 90, 64],
		// going to lock {22} early because it is already in correct position
		// A recursive function would go an extra step to ensure it was accounted for.
		// {next sorting group = ^}
		'[<5>, <11>, <12>, <22>, <25>, {34, 90, [64]}] - v^ 4th pass; next v^v',
	)

	// /* High group */
	// [<5>, <11>, <12>, 22, <25>, {34, 90, [64]}]

	// 5th pass ^
	const highGroupPivot = quickSortSinglePass(
		arrayToBeSorted,
		newPivotIndex + 1,
		arrayToBeSorted.length - 1,
	)
	console.log('^ 5th pass result', arrayToBeSorted)
	assertEquals(
		arrayToBeSorted,
		[5, 11, 12, 22, 25, 34, 64, 90],
		// {next sorting group = ^v}
		'[<5>, <11>, <12>, <22>, <25>, {34}, <64>, 90] - ^ 5th pass; next = ^v',
	)

	// 6th pass ^v
	quickSortSinglePass(arrayToBeSorted, newPivotIndex + 1, highGroupPivot - 1)
	console.log('^v 6th pass result', arrayToBeSorted)
	assertEquals(
		arrayToBeSorted,
		[5, 11, 12, 22, 25, 34, 64, 90],
		// {next sorting group = ^^}
		'[<5>, <11>, <12>, <22>, <25>, <34>, <64>, {90}] - ^v 6th pass; next = ^^',
	)

	// 7th pass ^^
	quickSortSinglePass(
		arrayToBeSorted,
		highGroupPivot + 1,
		arrayToBeSorted.length - 1,
	)
	console.log('^^ 7th pass result', arrayToBeSorted)
	assertEquals(
		arrayToBeSorted,
		[5, 11, 12, 22, 25, 34, 64, 90],
		'[<5>, <11>, <12>, <22>, <25>, <34>, <64>, <90>] - ^^ 7th pass - ALL SORTED!',
	)
})

Deno.test('recursive quicksort ascending', () => {
	assertEquals(
		recursiveQuickSortAscending('!', [64, 34, 5, 12, 22, 11, 90, 25]),
		[5, 11, 12, 22, 25, 34, 64, 90],
	)
})

Deno.test('recursive quicksort descending', () => {
	assertEquals(
		recursiveQuickSortDescending('!', [64, 34, 5, 12, 22, 11, 90, 25]),
		[5, 11, 12, 22, 25, 34, 64, 90],
	)
})
