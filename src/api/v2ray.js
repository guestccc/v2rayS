import ajax from '@/utils/ajax';

export const getV2ray = () => ajax({
  url: 'v2ray',
});

export const getV2rayInbound = () => ajax({
  url: 'v2ray/inbound',
});

export const addV2rayInbound = data => ajax({
  url: 'v2ray/inbound',
  method: 'post',
  data,
});

export const delV2ray = data => ajax({
  url: `v2ray/${data}`,
  method: 'delete',
});

export default null;
