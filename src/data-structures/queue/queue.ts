/* *
 *
 * FIFO(first in first out)
 * @description: Queue remove element from the front and add element to the back
 * @methods: enqueue, dequeue, size, isEmpty, front
 *
 * enqueue: add element to the back of the queue
 * dequeue: remove element from the front of the queue
 * size: return the queue length
 * isEmpty: return true if the queue is empty
 * peek: return the first element of the queue
 * */

interface QueueProps<T> {
    enqueue(element: T): void | undefined;

    dequeue(): T | undefined;

    size(): number;

    isEmpty(): boolean;

    peek(): T | null;
}

export default class QueueStruct<T> implements QueueProps<T> {
    private head: number;
    private tail: number;
    private readonly Q: Map<number, T>;

    constructor() {
        this.head = 0;
        this.tail = 0;
        this.Q = new Map();
    }

    enqueue(element: T) {
        if (this.head === this.tail + 1) {
            // append elements causes the queue to overflow
            return undefined
        }
        this.Q.set(this.tail, element)
        this.tail++
    }

    dequeue(): T | undefined {
        if (this.head === this.tail) {
            // The queue is empty, deleting elements causes the queue to underflow
            return undefined
        }
        this.Q.delete(this.head)
        this.head++
        return this.Q.get(this.head)
    }

    peek(): T | null {
        if (this.head) {
            return this.Q.get(this.head) as T
        }
        return null;
    }

    isEmpty(): boolean {
        return this.head === this.tail;
    }

    size(): number {
        return this.Q.size;
    }

}
