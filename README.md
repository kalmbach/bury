# `bury(obj, keypath, value)`
[![Code Climate](https://codeclimate.com/github/kalmbach/bury.png)](https://codeclimate.com/github/kalmbach/bury)
> Safely set a dot-notated path within a nested object, return undefined if the full key path does not exist, otherwise return the value set.

### NPM

https://www.npmjs.com/package/bury

### Usage

`bury(object, keypath, value)`

```js
import bury from 'bury';

let obj = {
	a: {
		b: {
			c: 1
			d: undefined
			e: null
		}
	}
};

//use string dot notation for keys
bury(obj, 'a.b.c', 2) === 2;

//or use an array key
bury(obj, ['a', 'b', 'c'], 2) === 2;

//returns undefined if the full key path does not exist
bury(obj, 'a.b.c.f', "foo") === undefined;
```

### Tests

https://github.com/kalmbach/bury/blob/master/test.js

### License

MIT
