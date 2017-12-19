export default function bury(obj, key, value) {
  key = key.split ? key.split('.') : key;

  var p = 0;
  var z = key[key.length - 1];

  while(obj.hasOwnProperty(key[p]) && key[p] !== z) obj = obj[key[p++]];
  return obj.hasOwnProperty(z) ? obj[z] = value : undefined;
}
