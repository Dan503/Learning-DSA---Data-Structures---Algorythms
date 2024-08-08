import { swapNodes } from './swapNodes.ts'
import {
	createDoublyLinkedList,
	DoublyNode,
} from '../list-types/doublyLinkedList.ts'
import { traverseForward } from './traversal.ts'
import { logLinkedList } from './logLinkedList.ts'

/**
 * `O(n) x O(n)` = `O(n^2)`
 * // only works for doubly because you need back references
 */
export function linkedListInsertionSort(headNode: DoublyNode) {
	traverseForward(headNode, (node) => {
		// O(n)
		shiftIfPrevLarger(node)
	})
}
// O(n)
export function shiftIfPrevLarger(thisNode: DoublyNode) {
	const prevValue = thisNode.prev?.data || -Infinity
	const thisValue = thisNode.data
	if (prevValue > thisValue && thisNode.prev) {
		swapNodes(thisNode.prev, thisNode)
		shiftIfPrevLarger(thisNode)
	}
}

const { headNode } = createDoublyLinkedList([1, 4, 3, 5, 2], {
	isCircular: false,
})

linkedListInsertionSort(headNode)

logLinkedList('insertSort', headNode)
