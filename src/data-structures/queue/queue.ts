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

interface props<T> {
    enqueue(element: T): void | undefined;

    dequeue(): T | undefined | null;

    size(): number;

    isEmpty(): boolean;

    peek(): T | null;
}

export default class QueueStruct<T> implements props<T> {
    private head: number;
    private tail: number;
    private readonly items: Map<number, T | null>;

    constructor() {
        this.head = 0;
        this.tail = 0;
        this.items = new Map();
    }

    enqueue(element: T): undefined | void {
        if (this.head === this.tail + 1) {
            // append elements causes the queue to overflow
            return undefined;
        }
        this.items.set(this.tail, element); // storage element
        this.items.set(this.tail + 1, null); // apply for memory
        this.tail++;
    }

    dequeue(): T | undefined | null {
        let header: T | null = null
        if (this.head === this.tail) {
            // The queue is empty, deleting elements causes the queue to underflow
            return undefined;
        }
        header = this.items.get(this.head) as T
        this.items.delete(this.head);
        this.head++;
        return header;
    }

    peek(): T | null {
        if (this.size()) {
            return this.items.get(this.head) as T;
        }
        return null;
    }

    isEmpty(): boolean {
        return this.head === this.tail;
    }

    size(): number {
        return this.items.size;
    }
}
