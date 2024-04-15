const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "the highest quality men's socks in the world ",
      image: "./assets/images/socks_green.jpg",
      onSale: true,
      inStock: true,
      inventory: 3,
      details: ["90% cotton", "7% wool", "3% polyester"],
      variants: [
        { id: 333, color: "green" },
        { id: 444, color: "blue" },
      ],
      url: "https://www.redbubble.com/i/socks/VueJS-In-Random-by-webdev27/118814720.9HZ1B",
    };
  },
});
