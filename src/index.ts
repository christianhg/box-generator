import { randomNumber } from './random-number';

export type Box = {
  width: number;
  height: number;
};

export function* createBoxGenerator({
  initial,
}: {
  initial: Box;
}): IterableIterator<Box> {
  for (let box of createSmallBoxGenerator({
    length: randomNumber({
      from: initial.width + 1,
      to: initial.width * 5,
    }),
  })) {
    yield box;
  }

  for (let box of createSmallBoxGenerator({
    length: randomNumber({
      from: initial.height + 1,
      to: initial.height * 5,
    }),
  })) {
    yield box;
  }

  for (let box of createSmallBoxGenerator({
    length: randomNumber({ from: 1, to: initial.width - 1 }),
  })) {
    yield box;
  }

  for (let box of createSmallBoxGenerator({
    length: randomNumber({ from: 1, to: initial.height - 1 }),
  })) {
    yield box;
  }

  for (let box of createSmallBoxGenerator({ length: initial.width })) {
    yield box;
  }

  for (let box of createSmallBoxGenerator({ length: initial.height })) {
    yield box;
  }
}

function* createSmallBoxGenerator({
  length,
}: {
  length: number;
}): IterableIterator<Box> {
  yield createBoxWithWidth({ shape: 'landscape', width: length });
  yield createBoxWithWidth({ shape: 'portrait', width: length });
  yield createBoxWithWidth({ shape: 'square', width: length });
  yield createBoxWithHeight({ shape: 'portrait', height: length });
  yield createBoxWithHeight({ shape: 'landscape', height: length });
}

type Shape = 'square' | 'landscape' | 'portrait';

function createBoxWithWidth({
  shape,
  width,
}: {
  shape: Shape;
  width: number;
}): Box {
  return {
    width,
    height:
      shape === 'square'
        ? width
        : shape === 'landscape'
        ? randomNumber({ from: 1, to: width - 1 })
        : randomNumber({ from: width + 1, to: width * 5 }),
  };
}

function createBoxWithHeight({
  shape,
  height,
}: {
  shape: 'landscape' | 'portrait';
  height: number;
}): Box {
  return {
    width:
      shape === 'landscape'
        ? randomNumber({ from: height + 1, to: height * 5 })
        : randomNumber({ from: 1, to: height - 1 }),
    height,
  };
}
