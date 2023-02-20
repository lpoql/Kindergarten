/*
 *
 *
 */

function hashSuits(suits: string[]): number {
  let list = new Set();
  for (let i of suits) {
    list.add(i);
  }
  return list.size;
}

export function bestHand(ranks: number[], suits: string[]): string {
  if (hashSuits(suits) === 1) {
    return 'Flush'; // check Flush
  }

  let ranksList = new Map<string, number>();
  for (let i of ranks) {
    ranksList.set(String(i), (ranksList.get(String(i)) || 0) + 1); // count the single element
  }

  if (ranksList.size === 5) return 'High Card'; // check High Card

  let a = 'Pair';

  ranksList.forEach(value => {
    if (value > 2) {
      a = 'Three of a Kind';
    }
  });

  return a;
}
