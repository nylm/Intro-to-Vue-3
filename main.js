const app = Vue.createApp({
  data() {
    return {
      basket: 0,
      product: "Socks",
      brand: "FE",
      selectedVariant: 0,
      description: "the highest quality men's socks in the world ",
      onSale: true,
      newItems: true,
      details: ["90% cotton", "7% wool", "3% polyester"],
      variants: [
        {
          id: 333,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 444,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      url: "https://www.redbubble.com/shop/?query=vuejs%20socks",
    };
  },
  methods: {
    addToBasket() {
      this.basket += 1;
    },

    deleteBasket() {
      this.basket = 0;
    },

    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
