const app = Vue.createApp({
  data() {
    return {
      basket: [],
      isPremium: true,
    };
  },
  methods: {
    updateBasket(id) {
      this.basket.push(id);
    },
    deleteBasket() {
      this.basket = 0;
    },
  },
});
