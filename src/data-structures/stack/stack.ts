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
    private readonly S: T[] = []; // init stack

    constructor(stack?: T[]) {
        if (stack && stack.length > 0) {
            this.S = stack
        }
    }

    push(ele: T) {
        this.S.push(ele);
        return this.S;
    }

    pop(): T[] | undefined {
        if (this.S.length !== 0) {
            this.S.pop();
        }
        return this.S;
    }

    size(): number {
        return this.S.length;
    }
}
