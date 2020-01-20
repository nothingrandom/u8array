import test from 'ava';
import u8 from '.';

test('u8', (t) => {
  const convertedArray = [...u8('test')];
  const expected = [116, 101, 115, 116];
  t.deepEqual(convertedArray, expected);
});
