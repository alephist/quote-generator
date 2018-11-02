// Card Component
Vue.component('quote-card', {
  props: {
    list: Array
  },
  template: `
    <div class="card" v-if="this.list.length">
      <div class="card-header">
        <p class="card-header-title is-centered">Category: {{ quoteCategory }}</p>
      </div>
      <div class="card-content">
        <p class="title is-size-4">"{{ quoteTitle }}"</p>
        <p class="subtitle has-text-right">- {{ quoteAuthor }}</p>
      </div>
      <div class="card-footer">
        <a href="#" class="card-footer-item" @click="changeQuote">Get Quote</a>
      </div>
    </div>
  `,
  data() {
    return {
      quoteIndex: 0
    };
  },
  methods: {
    changeQuote() {
      this.quoteIndex = Math.floor(Math.random() * this.list.length);
    }
  },
  computed: {
    quoteTitle() {
      return this.list[this.quoteIndex].quote;
    },
    quoteAuthor() {
      return this.list[this.quoteIndex].author;
    },
    quoteCategory() {
      let { cat } = this.list[this.quoteIndex];
      return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
  }
});

const app = new Vue({
  el: '#app',
  data: {
    quoteList: []
  },
  methods: {
    getQuotes() {
      axios.get('https://talaikis.com/api/quotes/').then((response) => (this.quoteList = response.data));
    }
  },
  created() {
    this.getQuotes();
  }
});
