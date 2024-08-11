class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(data) {
    let newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = newNode
      this.tail = newNode
    }
  }

  addFirst(data) {
    let newNode =  new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  addLast(data) {
    let newNode = new Node(data)
    this.tail.next = newNode
    this.tail = newNode
  }

  deleteFirst() {
    if (!this.head) {
      return
    }
    this.head = this.head.next

    if (this.head == null) {
      this.tail = null
    }
  }

  delete(data) {
    if (!this.head) {
      return
    }

    if (this.head.data == data) {
      this.head = this.head.next
    }

    if (!this.head) {
      this.tail = this.head
      console.log('tail ->', this.tail)
      console.log('head ->', this.head)
      return
    }

    let current = this.head
    let previous = null

    while (current.next && current.data !== data) {
      previous = current
      current = current.next
    }

    previous.next = current.next
    this.tail = previous
  }

  display() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
    console.log('tail -> ',this.tail.data)
  }
}

const linkedlist = new LinkedList()

linkedlist.add(10)
linkedlist.add(20)
linkedlist.addFirst(-100)
linkedlist.add(30)
// linkedlist.deleteFirst()
// linkedlist.deleteFirst()
// linkedlist.deleteFirst()
// linkedlist.deleteFirst()
linkedlist.delete(30)
linkedlist.addLast(40)
linkedlist.display()


