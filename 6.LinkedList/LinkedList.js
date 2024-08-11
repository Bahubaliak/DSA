class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(data) {
    let newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = newNode
    }
  }

  addFirst(data) {
    let newNode =  new Node(data)
    newNode.next = this.head
    this.head = newNode
  }

  deleteFirst() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }

  delete(data) {
    if (!this.head) {
      return
    }

    if (this.head.data == data) {
      this.head = this.head.next
    }

    let current = this.head
    let previous = null

    while (current.next && current.data !== data) {
      previous = current
      current = current.next
    }

    if (!current) {
      return
    }

    previous.next = current.next
  }

  display() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const linkedlist = new LinkedList()

linkedlist.add(10)
linkedlist.add(20)
linkedlist.addFirst(-100)
linkedlist.add(30)
linkedlist.deleteFirst()
linkedlist.deleteFirst()
linkedlist.deleteFirst()
linkedlist.deleteFirst()
linkedlist.display()


