import QueueStruct from '../queue';

describe('Queue', () => {
  it('delete element from the back from queue', function () {
    const queue = new QueueStruct();
    expect(queue.dequeue()).toEqual(undefined); // underflow
    expect(queue.peek()).toEqual(null); // not have first element
  });

  it('added element to the back of queue', function () {
    const queue = new QueueStruct();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(4)
  });

  it('delete element from the back from queue', function () {
    const queue = new QueueStruct();
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
  });

  it('show the first element of the queue', function () {
    const queue = new QueueStruct();
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(2);
  });
  it('check the size of queue and whether the queue is empty', function () {
    const queue = new QueueStruct();
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toEqual(false);
  });
});
