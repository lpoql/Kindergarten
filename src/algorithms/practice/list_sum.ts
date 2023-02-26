/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode<T> {
  val: T;
  next: ListNode<T> | null;
}

export function ArrToList<T>(arr: T[]): ListNode<T> | null {
  if (!arr.length) return null;
  const node: ListNode<T> = { val: arr[0], next: null };
  let next = node;
  for (let i = 1; i < arr.length; i++) {
    next.next = { val: arr[i], next: null };
    next = next.next;
  }
  return node;
}

export function addTwoNumbers(l1: ListNode<number> | null, l2: ListNode<number> | null): ListNode<number> | null {
  let carry: number = 0;
  const Node: ListNode<number> | null = { val: 0, next: null };
  let node = Node;

  while (l1 !== null || l2 !== null) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    node.next = { val: sum, next: null };
    node = node.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return Node.next;
}

export class LinkTable<T> {
  readonly #node: T; // current element
  #next: undefined | LinkTable<T>; // next node
  #len: number = 0; // list length

  constructor(node: T) {
    this.#node = node;
  }

  add = (node: T): LinkTable<T> => {
    this.#next = new LinkTable<T>(node);
    this.#len++;
    console.log(this.#node, this.next());
    return this.#next;
  };
  value = () => this.#node;
  next = () => {
    if (this.#next) return this.value();
  };
}
