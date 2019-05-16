import ajax from '@/utils/ajax';

export const getConfigInbound = () => ajax({
  url: 'v2ray/inbound',
});

export const createConfigInbound = data => ajax({
  url: 'v2ray/inbound',
  method: 'post',
  data,
});

export const deleteConfigInbound = data => ajax({
  url: `v2ray/${data}`,
  method: 'delete',
});

export default null;
