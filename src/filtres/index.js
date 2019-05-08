import Vue from 'vue';


Vue.filter('gb', (v = 0, i = 2) => (v / 1024 / 1024 / 1024).toFixed(i));
