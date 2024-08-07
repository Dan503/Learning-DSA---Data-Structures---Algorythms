import { DoublyNode } from './doublyLinkedList.ts'
import { traverseBackward, traverseForward } from './traversal.ts'

const node1 = new DoublyNode(3)
const node2 = new DoublyNode(5)
const node3 = new DoublyNode(13)
const node4 = new DoublyNode(2)

node1.next = node2
node1.prev = node4

node2.prev = node1
node2.next = node3

node3.prev = node2
node3.next = node4

node4.prev = node3
node4.next = node1

let loop = 1

console.log('Doubly circular linked list')

console.log(node1.data, ' -> ')

traverseForward(
	node2,
	(node) => {
		console.log(node.data, ' -> ')
		if (node == node1) {
			loop++
		}
	},
	() => loop <= 2,
)
console.log('...')

loop = 1

console.log(node4.data, ' <- ')

traverseBackward(
	node2,
	(node) => {
		console.log(node.data, ' <- ')
		if (node == node4) {
			loop++
		}
	},
	() => loop <= 2,
)
console.log('...')
