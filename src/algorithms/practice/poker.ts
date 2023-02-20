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
  let handType = 0;

  if (hashSuits(suits) === 1) {
    return 'Flush'; // check Flush
  }

  let ranksList = new Map<string, number>();
  for (let i of ranks) {
    ranksList.set(String(i), (ranksList.get(String(i)) || 0) + 1); // count the single element
  }

  handType = ranksList.size; // check High Card

  ranksList.forEach(value => {
    if (value === 2) handType = value; // check pair
    if (value > 2) handType = value;
  });

  switch (handType) {
    case 2:
      return 'Pair';
    case 5:
      return 'High Card';
    default:
      return 'Three of a Kind';
  }
}
