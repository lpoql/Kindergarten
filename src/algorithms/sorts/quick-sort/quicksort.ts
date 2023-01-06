/*
* Quicksort is a divide and conquer algorithm.
* It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,
* according to whether they are less than or greater than the pivot.
* The sub-arrays are then sorted recursively.
* This can be done in-place, requiring small additional amounts of memory to perform the sorting.
* */

/*
* [1, 2, 6, 8, 4, 3, 7, 5, 3, 9]
* params: array - array to be sorted
*         left - left index of the array
*         right - right index of the array
* */

function swap(arr: Array<number>, i: number, j: number) {
    return [arr[i], arr[j]] = [arr[j], arr[i]];
}

export function Partition(arr: Array<number>, left: number, right: number) {
    let pivot = arr[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        // while arr[left] > pivot and arr[right] < pivot
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left; // return the index of the pivot
}

export function Quicksort(arr: Array<number>, left: number, right: number) {
    let pivotIndex;
    if (arr.length > 1) {
        pivotIndex = Partition(arr, left, right);
        // Divide and conquer
        if (left < pivotIndex - 1) {
            Quicksort(arr, left, pivotIndex - 1);
        }
        if (pivotIndex < right) {
            Quicksort(arr, pivotIndex, right);
        }
    }
    return arr;
}

/*
*
* Refer https://zh.wikipedia.org/zh-cn/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F
*       https://en.wikipedia.org/wiki/Quicksort
*/

export function PivotIndex(arr: Array<number>, left: number, right: number, pivot: number): number {
    let pivotVal = arr[pivot]
    swap(arr, arr[pivot], arr[right])

    let storeIndex = left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotVal) {
            swap(arr, storeIndex, i)
            storeIndex += 1
        }
    }
    swap(arr, right, storeIndex)
    return storeIndex
}

export function Quicksorting(arr: Array<number>, left: number, right: number) {
    let pivotIndex;
    if (right > left) {
        pivotIndex = PivotIndex(arr, left, right, right);
        Quicksorting(arr, left, pivotIndex - 1);
        Quicksorting(arr, pivotIndex + 1, right);
    }
    return arr;
}
