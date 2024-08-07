import { DoublyNode } from '../list-types/doublyLinkedList.ts'

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

export const doublyCircularNodeHead = node1
export const doublyCircularNodeTail = node4
