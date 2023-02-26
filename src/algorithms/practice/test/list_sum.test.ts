import { addTwoNumbers, ArrToList, LinkTable } from '../list_sum';

describe('arr to list', () => {
  it('test array to list', function () {
    expect(ArrToList([7, 0, 8])).toEqual({ val: 7, next: { val: 0, next: { val: 8, next: null } } });
  });

  it('Addition of two numbers in linked list form', function () {
    expect(addTwoNumbers(ArrToList([2, 4, 3]), ArrToList([5, 6, 4]))).toEqual({
      val: 7,
      next: { val: 0, next: { val: 8, next: null } },
    });
  });

  it('Boundary case of converting an array to a linked list', () => {
    expect(ArrToList([])).toBeNull();
  });

  // it('Linked list-related operations implemented by the test class', () => {
  //     function linkAdd<T>(arr: T[]) {
  //         if (!arr.length) return null
  //         const node = new LinkTable<T>(arr[0]);
  //         // console.log(node,'node')
  //         arr.splice(1).forEach(val => {
  //             console.log(val,'-')
  //             node.add(val)
  //         })
  //         return node
  //     }
  //
  //     // expect(linkAdd([8,0,7])).toEqual({val: 8, next: {val: 0, next: {val: 7, next: null}}})
  //     linkAdd([8,0,7])
  // })
});
