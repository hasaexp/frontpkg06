import Vue from 'vue';
import '../sass/style.sass';
import '../css/font.css';
import { hello, foo } from './greeting';
import mycomponent from '../components/MyComponent.vue';

hello();
foo();

const items = [
  { name: 'レモン', price: 200, quantity: 2 },
  { name: 'りんご', price: 200, quantity: 1 },
  { name: 'メロン', price: 800, quantity: 1 },
];

const vm = new Vue({
  data: {
    greeting: 'hello Vue.js',
    items,
  },
  computed: {
    totalPrice: () => items.reduce((sum, item) => sum + item.price, 0),
  },
  components: {
    mycomponent,
  },
});
vm.$mount('#app');
