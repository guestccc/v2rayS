import router from './router';

router.beforeEach((to, from, next) => {
  console.log('------------');
  console.log('to:', to);
  console.log('------------');
  console.log('------------');
  console.log('from:', from);
  console.log('------------');
  console.log('------------');
  console.log('next:', next);
  console.log('------------');
  next();
});
