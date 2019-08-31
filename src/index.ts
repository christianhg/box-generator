import { randomNumber } from './random-number';

export type Box = {
  width: number;
  height: number;
};

export function* createBoxGenerator({
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

export function getRandomBoxes({ initial }: { initial: Box }): Box[] {
  return [
    ...createBoxGenerator({
      length: randomNumber({
        from: initial.width + 1,
        to: initial.width * 5,
      }),
    }),
    ...createBoxGenerator({
      length: randomNumber({
        from: initial.height + 1,
        to: initial.height * 5,
      }),
    }),
    ...createBoxGenerator({
      length: randomNumber({ from: 1, to: initial.width - 1 }),
    }),
    ...createBoxGenerator({
      length: randomNumber({ from: 1, to: initial.height - 1 }),
    }),
    ...createBoxGenerator({ length: initial.width }),
    ...createBoxGenerator({ length: initial.height }),
  ];
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
