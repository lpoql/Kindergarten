import {mergeSort} from "./mergesort";

describe('merge sort options', () => {
    it('boundary situation', () => {
        expect(mergeSort([])).toEqual([])
    })

    it('', () => {
        expect(mergeSort([5, 88, 45, 4, 9, 89, 56, 5, 66, 22, 7])).toEqual([4, 5, 5, 7, 9, 22, 45, 56, 66, 88, 89])
    })
})
