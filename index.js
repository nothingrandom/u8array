const u8 = (src) => {
  let string = '';
  if (typeof src !== 'string') {
    string = src.toString();
  } else {
    string = src;
  }

  const arrayBuffer = new ArrayBuffer(string.length * 1);
  const newUint = new Uint8Array(arrayBuffer);
  newUint.forEach((_, i) => {
    newUint[i] = string.charCodeAt(i);
  });

  return newUint;
};

module.exports = u8;
