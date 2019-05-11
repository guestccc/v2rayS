import ajax from '@/utils/ajax';

export const getV2ray = () => ajax({
  url: 'v2ray',
});

export const addV2ray = data => ajax({
  url: 'v2ray',
  method: 'post',
  data,
});

export const delV2ray = data => ajax({
  url: `v2ray/${data}`,
  method: 'delete',
});

export default null;
