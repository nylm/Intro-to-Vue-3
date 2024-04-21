const app = Vue.createApp({
  data() {
    return {
      basket: 0,
      isPremium: true,
    };
  },
  methods: {
    updateBasket() {
      this.basket += 1;
    },
    deleteBasket() {
      this.basket = 0;
    },
  },
});
