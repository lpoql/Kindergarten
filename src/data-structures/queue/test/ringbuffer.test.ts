import RB from '../ringbuffer';

const rb = new RB(5);
const empty_rb = new RB<number>(0);

describe('RingBuffer', () => {
  it('', function () {
    expect(rb.len()).toBe(5);
  });

  it('single element write', () => {
    for (let i = 0; i <= 5; i++) {
      expect(rb.singleWrite(i)).toBe(true);
    }
    expect(rb.read(5)).toBe([0, 1, 2, 3]);
  });

  it('read option boundary case', () => {
    expect(rb.read()).toBe([]);
    expect(rb.read(0)).toBe([]);

    expect(empty_rb.read()).toBe([]);
  });
});
