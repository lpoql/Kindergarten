/*
* LIFO(last in first out)
* S: means stack
* Push: to add items to the stack
* Pop: returns the last added item and deletes it from the stack.
* Size: return the stack length
* */

interface stackProps<T> {
    pop(): T[] | undefined

    push(element: T): void

    size(): number
}

export default class StackStruct<T> implements stackProps<T> {
    private S: T[] = [] // init stack

    constructor() {}

    push(ele: T) {
        if(this.S.length === Infinity){
            return Error('Stack has reached maximum capacity')
        }
        this.S.push(ele)
        return this.S
    }

    pop(): T[] | undefined {
        if(this.S.length!==0){
            this.S.pop()
        }
        return this.S;
    }

    size(): number {
        return this.S.length;
    }
}