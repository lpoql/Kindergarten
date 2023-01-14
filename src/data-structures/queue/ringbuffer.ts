/*
* The ring buffer can continuously read elements and write elements
* @params
*   len: ring buffer length
*   write(): continue writing elements at the end of ring buffer
*   singleWrite(): to write single elements at the end of ring buffer
*   read(): continue reading elements at the head of ring buffer
* */

interface RingBuffer<DATA> {
    len(): number

    // write(data: DATA[]): Promise<DATA[]>

    singleWrite(w: DATA): boolean

    read(): DATA[]

    empty(): boolean
}

export default class RB<T> implements RingBuffer<T> {
    private readonly length: number
    private r: number  // read
    private w: number // write
    private readonly items: T[]

    constructor(len: number) {
        if (len <= 0 || isNaN(len)) {
            throw Error('params is not valid')
        }

        this.length = len
        this.r = 0
        this.w = 0
        this.items = new Array<T>(this.length)
    }

    len(): number {
        return this.length
    }

    read(size?: number): T[] {
        if (!size || size < 1) {
            size = 1
        }

        let list: T[] = []

        if (this.r === this.w) return list

        const n = this.w - this.r

        if (n > 0) {
            if (size > n) {
                size = n
            }
            this.items.slice(this.r, size).map(i => {
                list.push(i)
            })
            this.r += size
            return list
        }

        if (size > (this.length + n)) {
            size = this.length + n
        }

        const {fr, lr} = (() => {
                let fr = size
                let lr = -1

                if (size > (length - this.r)) {
                    fr = size - this.r
                    lr = size - fr
                }

                return {fr, lr}
            }
        )()


        this.items.slice(this.r, this.r + fr).map(i => {
            list.push(i)
        })
        this.r += fr

        if (lr > 0) {
            this.items.slice(0, lr).map(i => {
                list.push(i)
            })
            this.r = lr
        }

        return list
    }

    // write(data: T[]): Promise<T[]> {
    //     const len = data.length
    //
    //     if (len === 0) return Promise.resolve([])
    //
    //     if (len > this.len() && this.empty()) {
    //         for (let i = 0; i < len - this.len(); i++) {
    //             this.items.push(data[i])
    //             this.w++
    //         }
    //     }
    //
    //
    //     return Promise.resolve(this.items)
    // }

    singleWrite(item: T): boolean {
        // If the ring forms a closed loop, the ring is full
        if ((this.w + 1) % this.len() === this.r) {
            return false
        }
        this.items[this.w] = item
        this.w = (this.w + 1) % this.len()
        return true
    }

    empty(): boolean {
        return this.r === this.w
    }
}


















