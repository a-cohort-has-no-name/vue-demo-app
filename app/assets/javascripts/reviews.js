/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Reviews!',
      reviews: [
        "Vue.js is the best thing since sliced bread!",
        "I love Vue.js, especially when I'm programming!",
        "Vue.js is waaaaay better than Chinese Checkers."
      ]
    },
    mounted: function() {

    },
    methods: {

    },
    computed: {

    }
  });
});