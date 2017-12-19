var assert = require('assert');
var bury = require('.');

var obj = {
  a: {
    b: {
      z: 12
    },
    c: {
      d: 'foo'
    }
  },
  d: {
    e: false
  }
};

function check(path, value, expected) {
  var bkp = Object.assign({}, obj);

  var out = bury(bkp, path, value)
  assert.strictEqual(out, expected, 'bury(obj, "'+path+'", '+value+') should be '+expected+', got '+out);
}

check("a.b.name", "Jorge", undefined);
check("a.b.z", 100, 100);
check("a.c.d", "bar", "bar");
check("d.e", true, true);

console.log('✅ Success!');
process.exit(0);
