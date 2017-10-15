/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Reviews!',
      reviews: [
        "Vue.js is the best thing since sliced bread!",
        "I love Vue.js, especially when I'm programming!",
        "Vue.js is waaaaay better than Chinese Checkers.",
        "Vue.js is bad."
      ],
      newReview: ''
    },
    mounted: function() {

    },
    methods: {
      addReview: function() {
        this.reviews.push(this.newReview);
      },
      isPositive: function(inputReview) {
        // return true if bad is not in our string
        // return false if bad is in our string
        return inputReview.indexOf('bad') === -1;
      }
    },
    computed: {

    }
  });
});