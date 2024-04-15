const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "the highest quality men's socks in the world ",
      image: "./assets/images/socks_green.jpg",
      onSale: true,
      inStock: true,
      inventory: 3,
      url: "https://www.redbubble.com/i/socks/VueJS-In-Random-by-webdev27/118814720.9HZ1B",
    };
  },
});
