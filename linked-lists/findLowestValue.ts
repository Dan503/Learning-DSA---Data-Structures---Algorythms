import { DoublyNode } from './doublyLinkedList.ts'
import { SinglyNode } from './singlyLinkedList.ts'
import { traverseForward } from './traversal.ts'

export function findLowestLinkedListValue(headNode: SinglyNode | DoublyNode) {
	let lowestNode = headNode
	let loop = 0
	traverseForward(
		headNode,
		(node) => {
			if (node.data < lowestNode.data) {
				lowestNode = node
			}
			if (node === headNode) loop++
		},
		() => loop <= 1,
	)
	return lowestNode
}
