/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Reviews!',
      reviews: [
        {
          text: "Vue.js is the best thing since sliced bread!",
          rating: 5,
          reviewer: "Ian Matthews"
        },
        {
          text: "I love Vue.js, especially when I'm programming!",
          rating: 4,
          reviewer: "Krunal Patel"
        },
        {
          text: "Vue.js is waaaaay better than Chinese Checkers.",
          rating: 3,
          reviewer: "Kathleen Domingo"
        }
      ],
      newReviewText: '',
      newReviewRating: '',
      newReviewReviewer: ''
    },
    mounted: function() {

    },
    methods: {
      addReview: function() {
        var newReview = {
          text: this.newReviewText,
          rating: this.newReviewRating,
          reviewer: this.newReviewReviewer
        }
        this.reviews.push(newReview);
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






