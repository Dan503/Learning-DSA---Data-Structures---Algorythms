import {
	createSinglyLinkedList,
	SinglyNode,
} from '../list-types/singlyLinkedList.ts'
import { logLinkedList } from './logLinkedList.ts'
import { traverseForward } from './traversal.ts'

export function linkedListSelectionSort(headNode: SinglyNode) {
	traverseForward(headNode, (node) => {
		selectionSortSinglePass(node)
	})
}

function selectionSortSinglePass(startNode: SinglyNode) {
	traverseForward(startNode, (thisNode) => {
		const startValue = startNode.data
		const thisValue = thisNode.data
		// if current value is greater than next value, swap them
		if (startValue > thisValue) {
			// Note that we swap the data values instead of the node connections
			// without prev connections, it is too difficult keeping track of correct linkages
			startNode.data = thisValue
			thisNode.data = startValue
		}
	})
}

const { headNode } = createSinglyLinkedList([1, 4, 3, 6, 2, 5], {
	isCircular: false,
})

linkedListSelectionSort(headNode)

logLinkedList('selection sort', headNode)
