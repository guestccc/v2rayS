export const keepAlive = {
  beforeRouteLeave(to, from, next) {
    console.log('------------');
    console.log('to', to);
    // console.log('from', from);
    console.log('------------');
    next();
  },
};

export default null;
