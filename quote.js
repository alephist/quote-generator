const app = new Vue({
  el: '#app',
  data: {
    quoteList: [],
    quoteIndex: 0
  },
  methods: {
    getQuotes() {
      axios.get('https://talaikis.com/api/quotes/').then((response) => (this.quoteList = response.data));
    },
    changeQuote() {
      this.quoteIndex = Math.floor(Math.random() * this.quoteList.length);
    }
  },
  created() {
    this.getQuotes();
  },
  computed: {
    quoteTitle() {
      return this.quoteList[this.quoteIndex].quote;
    },
    quoteAuthor() {
      return this.quoteList[this.quoteIndex].author;
    },
    quoteCategory() {
      let { cat } = this.quoteList[this.quoteIndex];
      return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
  }
});
