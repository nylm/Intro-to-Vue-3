app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src='image' :class="{'out-of-stock-img':!inStock}">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-show="sale" style="color:red;">ON SALE! </p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <button class="button" :class="{disabledButton:!inStock}" v-on:click="addToBasket" :disabled="!inStock">Add to Basket</button>
        <button class="button" @click="deleteBasket">Remove Items</button>
        <div 
        v-for="(variant,index) in variants" 
        :key="variant.id" 
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{'background-color':variant.color}"
        >
      </div>
      </div>
      <!-- v-bind optional,shortcut is ':' -->
      <a :href="url" v-show="newItems">New Collection!</a>
    </div>
    </div>
    `,
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
      this.$emit("add-to-basket");
    },

    deleteBasket() {
      this.$emit("delete-basket");
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
    sale() {
      return this.onSale && this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
