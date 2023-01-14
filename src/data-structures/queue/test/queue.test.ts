import QueueStruct from "../queue";

const queue = new QueueStruct()

describe('Queue', () => {
    it("delete element from the back from queue", function () {
        expect(queue.dequeue()).toEqual(undefined) // underflow
        expect(queue.peek()).toEqual(null) // not have first element
    })

    it('added element to the back of queue', function () {
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
    });

    it("delete element from the back from queue", function () {
        expect(queue.dequeue()).toBe(1)
    })
    it("show the first element of the queue", function () {
        expect(queue.peek()).toBe(2)
    })
    it("check the size of queue and whether the queue is empty", function () {
        expect(queue.size()).toBe(2)
        expect(queue.isEmpty()).toEqual(false)
    })
})
