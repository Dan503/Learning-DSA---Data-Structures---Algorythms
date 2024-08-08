import { DoublyNode } from '../list-types/doublyLinkedList.ts'
import { SinglyNode } from '../list-types/singlyLinkedList.ts'
import { traverseForward } from './traversal.ts'

export function logLinkedList(note: string, headNode: SinglyNode | DoublyNode) {
	const outputItems: Array<number> = []
	traverseForward(headNode, (node) => {
		outputItems.push(node.data)
	})
	console.log(note, outputItems)
}
