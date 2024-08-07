import { DoublyNode } from '../list-types/doublyLinkedList.ts'
import { SinglyNode } from '../list-types/singlyLinkedList.ts'
import { traverseForward } from '../list-opperations/traversal.ts'

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
