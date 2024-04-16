const app = Vue.createApp({
  data() {
    return {
      basket: 0,
      product: "Socks",
      description: "the highest quality men's socks in the world ",
      image: "./assets/images/socks_green.jpg",
      onSale: true,
      inStock: false,
      newItems: true,
      inventory: 3,
      details: ["90% cotton", "7% wool", "3% polyester"],
      variants: [
        { id: 333, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 444, color: "blue", image: "./assets/images/socks_blue.jpg" },
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

    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
