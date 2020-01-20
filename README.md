# u8array
![Travis (.com)](https://img.shields.io/travis/com/nothingrandom/u8array)
> Create Uint8Array from string

## Install

``` bash
$ yarn add u8array
$ npm install u8array
```

## Usage (require in JS)
``` js
const u8 = require('u8array');

// returns Uint8Array [116, 101, 115, 116];
const uint8object = u8('test');

// returns [116, 101, 115, 116];
const array = [...u8('test')];
```

## License
MIT © [Benjamin Hollway](https://nothingrandom.com)