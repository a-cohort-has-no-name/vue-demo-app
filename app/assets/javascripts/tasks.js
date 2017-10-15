/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var task = new Vue({
    el: '#task',
    data: {
      message: 'Hello Vue!',
      tasks: ['Take out the trash', 'Feed the cat', 'Mow the lawn'],
      newTask: ''
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTask) {
          this.tasks.push(this.newTask);
          this.newTask = '';
        }
      },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index, 1);
      }
    },
    computed: {

    }
  });
});