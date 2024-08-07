export class SinglyNode {
	data: number
	next: null | SinglyNode = null

	constructor(data: number) {
		this.data = data
	}
}

const node1 = new SinglyNode(3)
const node2 = new SinglyNode(5)
const node3 = new SinglyNode(13)
const node4 = new SinglyNode(2)

node1.next = node2
node2.next = node3
node3.next = node4

export const singlyNodeHead = node1
export const singlyNodeTail = node4
