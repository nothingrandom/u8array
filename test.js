import test from 'ava';
import u8 from '.';

test('u8 strings', (t) => {
  t.deepEqual([...u8('test')], [116, 101, 115, 116]);
});

test('u8 numbers', (t) => {
  t.deepEqual([...u8(1)], [49]);
});

test('u8 array', (t) => {
  t.deepEqual([...u8([16, 34, 12])], [49, 54, 44, 51, 52, 44, 49, 50]);
});

test('typeof', (t) => {
  const result = u8('test');

  t.assert(typeof result === 'object');
});
