import ajax from '@/utils/ajax';

export const putLog = data => ajax({
  url: 'v2ray/log',
  method: 'put',
  data,
});

export default null;
