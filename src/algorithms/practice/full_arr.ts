// [1,2,3]
export const func = (nums: number[]): number[][] => {
    const res: number[][] = []

    function generate(curr: number[], recorder: { [p: string]: number }) {
        if (curr.length === nums.length) return res.push(curr.slice())

        nums.map(each => {
            if (recorder[each]) return
            curr.push(each)
            recorder[each] = 1
            generate(curr, recorder)
            curr.pop()
            delete recorder[each]
        });
    }

    generate([], {})
    return res
}