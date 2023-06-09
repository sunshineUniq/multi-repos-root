class Node {
    constructor(v, next) {
        this.value = v
        this.next = next
    }
}

class LinkList {
    constructor() {
        this.size = 0
        // 虚拟头部
        this.dummyNode = new Node(null, null)
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    checkIndex(index) {
        if (index < 0 || index > this.size) {
            throw Error('Index Error')
        }
    }

    find(header, index, currentIndex) {
        if (index === currentIndex) {
            return header
        }
        return this.find(header.next, index, currentIndex + 1)
    }

    addNode(v, index) {
        this.checkIndex(index)
        const prev = this.find(this.dummyNode, index, 0)
        prev.next = new Node(v, prev.next)
        this.size++
        return prev.next
    }

    insertNode(v, index) {
        return this.addNode(v, index)
    }

    addToFirst(v) {
        return this.addNode(v, 0)
    }

    addToLast(v) {
        return this.addNode(v, this.size)
    }

    removeNode(index, isLast) {
        this.checkIndex(index)
        index = isLast ? index - 1 : index
        const prev = this.find(this.dummyNode, index, 0)
        let node = prev.next
        prev.next = node.next
        node.next = null
        this.size--
        return node
    }

    removeFirstNode() {
        return this.removeNode(0)
    }

    removeLastNode() {
        return this.removeNode(this.size, true)
    }

    getNode(index) {
        this.checkIndex(index)
        if (this.isEmpty()) {
            return
        }
        return this.find(this.dummyNode, index, 0).next
    }

}


// 思路： 查找到目标位置的上一个node

// 每次查找都是从虚拟头部开始