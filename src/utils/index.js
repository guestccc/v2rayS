import { message } from 'ant-design-vue';

/**
 * 随机整数
 * @param {number} min 随机数的最小值
 * @param {number} max 随机数的最大值
 * @return {number} xxx
 */
export function randomInteger(min = 0, max = 9999) {
  const difference = max - min;
  if (difference <= 0) {
    console.error('min > max');
    return false;
  }
  return Math.floor(Math.random() * (difference + 1) + min);
}

export function randomString(
  lenght = 6,
  str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
) {
  const strLen = str.length;
  let res = '';
  Array(lenght).fill().forEach(() => {
    res += str[randomInteger(0, strLen - 1)];
  });
  return res;
}

export function getType(obj) {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return 'Object';
  } if (Object.prototype.toString.call(obj) === '[object Array]') {
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

export function JSONCopy(v) {
  return JSON.parse(JSON.stringify(v));
}

export function copyToClipboard(str) {
  if (!document.execCommand) {
    message.error('该浏览器不支持复制到剪切板，请更新或更换您的浏览器！');
    return;
  }
  const oInput = document.createElement('input');
  oInput.value = str;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand('Copy');
  document.body.removeChild(oInput);
  message.success('复制到剪切板成功！');
}
