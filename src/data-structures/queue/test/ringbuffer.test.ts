import RB from '../ringbuffer';
import {read} from "fs";

describe('RingBuffer', () => {
  it('', function () {
    const rb = new RB(5);
    expect(rb.len()).toBe(5);
  });

  it('single element write', () => {
    const rb = new RB(5);
    for (let i = 1; i < 5; i++) {
      expect(rb.singleWrite(i)).toEqual(true);
    }
    expect(rb.singleWrite(5)).toEqual(false);

    expect(rb.read(5)).toStrictEqual([ 1, 2, 3,4]);
  });

  it('read option boundary case', () => {
    let err:unknown
    try {
      const rb = new RB(0);
      rb.read(1)
    }catch (e) {
      err = e
    }
    expect(err).toEqual(Error('params is not valid'));
  });
});
