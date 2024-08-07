import { SinglyNode } from './singlyLinkedList.ts'

const node1 = new SinglyNode(3)
const node2 = new SinglyNode(5)
const node3 = new SinglyNode(13)
const node4 = new SinglyNode(2)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node1

export const singlyCircularNodeHead = node1
export const singlyCircularNodeTail = node4