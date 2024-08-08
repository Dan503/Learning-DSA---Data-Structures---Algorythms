import {
	createSinglyLinkedList,
	SinglyNode,
} from '../list-types/singlyLinkedList.ts'
import { traverseForward } from './traversal.ts'

export function linkedListBubbleSort(headNode: SinglyNode) {
	let lastNode: SinglyNode | undefined = undefined
	traverseForward(headNode, (node) => {
		lastNode = bubbleSortSinglePass(node)
	})
}

function bubbleSortSinglePass(
	startNode: SinglyNode,
	// endNode: SinglyNode | undefined,
) {
	let finalNode: SinglyNode = startNode
	traverseForward(startNode, (thisNode) => {
		const nextNode = thisNode.next
		const thisValue = thisNode.data
		const nextValue = nextNode?.data || -Infinity
		// if current value is greater than next value, swap them
		if (thisValue > nextValue && nextNode) {
			thisNode.data = nextValue
			nextNode.data = thisValue
		}
		finalNode = thisNode
	})
	return finalNode
}

const { headNode } = createSinglyLinkedList([1, 4, 3, 5, 2], {
	isCircular: false,
})

linkedListBubbleSort(headNode)

const outputItems: Array<number> = []
traverseForward(headNode, (node) => {
	outputItems.push(node.data)
})
console.log(outputItems)
