/*[6,8,4,33,7,1,6,2,5]
* Refer:https://zh.wikipedia.org/zh-cn/归并排序#Javascript
*       https://en.wikipedia.org/wiki/Merge_sort
* 1、recursive split
* 2、merge subsequence
* */
export function merge(left?: number[], right?: number[]): any {
    if (!left || !right) return []
    const result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

export function mergeSort(arr: number[]): number[] | undefined {
    if (arr.length <= 1) return arr;
    // recursively generate the smallest subsequence
    const middle = Math.floor(arr.length / 2);
    const left: number[] = arr.slice(0, middle);
    const right: number[] = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}