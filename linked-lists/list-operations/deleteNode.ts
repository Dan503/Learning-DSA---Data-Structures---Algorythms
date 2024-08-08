import { DoublyNode } from '../list-types/doublyLinkedList.ts'
import { SinglyNode } from '../list-types/singlyLinkedList.ts'
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

/** Remove the node from the chain AND delete the next/prev data */
export function deleteDoublyNode(deletionNode: DoublyNode) {
	detachDoublyNode(deletionNode)

	deletionNode.prev = null
	deletionNode.next = null
}

/** Remove the node from the chain without deleting the next/prev data */
export function detachDoublyNode(nodeToDetach: DoublyNode) {
	const prevNode = nodeToDetach.prev
	const nextNode = nodeToDetach.next

	if (prevNode) prevNode.next = nextNode
	if (nextNode) nextNode.prev = prevNode
}
