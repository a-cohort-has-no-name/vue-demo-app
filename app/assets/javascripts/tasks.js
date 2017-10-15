/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#tasks',
    data: {
      message: 'Hello Vue!',
      tasks: ['Take out the trash', 'Feed the cat', 'Mow the lawn']
    },
    mounted: function() {

    },
    methods: {

    },
    computed: {

    }
  });
});