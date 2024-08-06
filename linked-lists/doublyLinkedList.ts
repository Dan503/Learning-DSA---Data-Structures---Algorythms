export class DoublyNode {
	data: number
	next: null | DoublyNode = null
	prev: null | DoublyNode = null

	constructor(data: number) {
		this.data = data
	}
}

const node1 = new DoublyNode(3)
const node2 = new DoublyNode(5)
const node3 = new DoublyNode(13)
const node4 = new DoublyNode(2)

node1.next = node2

node2.prev = node1
node2.next = node3

node3.prev = node2
node3.next = node4

node4.prev = node3

let currentNode: DoublyNode | null = node1

console.log('Doubly linked list')

while (currentNode) {
	console.log(currentNode.data, ' -> ')
	currentNode = currentNode.next
}
console.log(null)

currentNode = node4

while (currentNode) {
	console.log(currentNode.data, ' <- ')
	currentNode = currentNode.prev
}
console.log(null)
