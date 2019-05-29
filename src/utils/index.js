export function getType(obj) {
  if (Object.prototype.toString.call(obj) == '[object Object]') {
    return 'Object';
  } if (Object.prototype.toString.call(obj) == '[object Array]') {
    return 'Array';
  }
  return 'nomal';
}

export function deepCopy(obj) {
  if (getType(obj) === 'nomal') {
    return obj;
  }
  const newObj = getType(obj) === 'Object' ? {} : [];
  Object.keys(obj).forEach((item) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!obj.hasOwnProperty(item)) return;
    newObj[item] = deepCopy(obj[item]);
  });
  return newObj;
}
