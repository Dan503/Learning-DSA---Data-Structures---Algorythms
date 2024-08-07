import { DoublyNode } from './doublyLinkedList.ts'
import { SinglyNode } from './singlyLinkedList.ts'
import { traverseForward } from './traversal.ts'

export function deleteSinglyNode(
	headNode: SinglyNode,
	deletionNode: SinglyNode | null,
) {
	let prevNode: SinglyNode | null = null
	traverseForward(headNode, (node) => {
		if (node === deletionNode) {
			const nextNode = deletionNode.next
			if (prevNode) {
				prevNode.next = nextNode
			}
			node.next = null
			// you can't really delete nodes from memory in JS
			// You instead need to remove all references to the variable
			// This allows Garbage collection to remove the variable from memory instead
			// deletionNode = null
		}
		prevNode = node
	})
}

export function deleteDoublyNode(deletionNode: DoublyNode) {
	const prevNode = deletionNode.prev
	const nextNode = deletionNode.next

	if (prevNode) prevNode.next = nextNode
	if (nextNode) nextNode.prev = prevNode

	deletionNode.prev = null
	deletionNode.next = null
}
