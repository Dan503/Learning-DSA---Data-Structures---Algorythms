// O(2^n) // 2nd worst type of efficiency in algorithms!
// The much better method is to generate the list of fibonacci numbers first then pick out the index
export function fibonacciFind(index: number): number {
	if (index <= 1) {
		return index
	}

	return fibonacciFind(index - 1) + fibonacciFind(index - 2)
}
