import { fibonacciRecursion } from './fibonacci-recursion.ts'
// O(n)
export function fibonacciFind(index: number): number {
	const sequence = fibonacciRecursion(index)
	return sequence[index]
}
