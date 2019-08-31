import { createBoxGenerator } from '../src';

describe(createBoxGenerator.name, () => {
  it('works', () => {
    const boxes = [
      ...createBoxGenerator({ initial: { width: 100, height: 100 } }),
    ];

    expect(
      boxes.filter(box => box.width === 100 && box.height === 100).length
    ).toBe(2);
  });
});
