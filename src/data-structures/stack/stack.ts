/*
 * LIFO(last in first out)
 * S: means stack
 * Push: to add items to the stack
 * Pop: deletes it from the stack and return.
 * Size: return the stack length
 * */

interface stackProps<T> {
  pop(): T[] | undefined;

  push(element: T): void;

  size(): number;
}

export default class StackStruct<T> implements stackProps<T> {
  private readonly s: T[] = []; // init stack

  constructor(stack?: T[]) {
    if (stack && stack.length > 0) {
      this.s = stack;
    }
  }

  push(ele: T) {
    this.s.push(ele);
    return this.s;
  }

  pop(): T[] | undefined {
    if (this.s.length !== 0) {
      this.s.pop();
    }
    return this.s;
  }

  size(): number {
    return this.s.length;
  }
}
