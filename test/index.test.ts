import { getRandomBoxes } from '../src';

describe(getRandomBoxes.name, () => {
  it('works', () => {
    const boxes = getRandomBoxes({ initial: { width: 100, height: 100 } });

    expect(
      boxes.filter(box => box.width === 100 && box.height === 100).length
    ).toBe(2);
  });
});
