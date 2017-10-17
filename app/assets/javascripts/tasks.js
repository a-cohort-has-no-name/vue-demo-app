/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var task = new Vue({
    el: '#task',
    data: {
      message: 'Hello Vue!',
      tasks: [
        {
          text: 'Take out the trash',
          completed: false
        },
        {
          text: 'Feed the cat',
          completed: false
        },
        {
          text: 'Mow the lawn',
          completed: false
        }
      ],
      newTaskText: ''
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTaskText) {
          var newTask = {
            text: this.newTaskText,
            completed: false
          }
          this.tasks.push(newTask);
          this.newTaskText = '';
        }
      },
      completeTask: function(inputTask) {
        inputTask.completed = !inputTask.completed
      },
      numberOfIncompleteTasks: function() {
        var count = 0;
        for (var i = 0; i < this.tasks.length; i++) {
          //if !task.complete, increase count
          if (!this.tasks[i].completed) {
            count++
          }
        }
        return count;
      },
      removeCompletedTasks: function() {
        var incompleteTasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
          if (!this.tasks[i].completed) {
            incompleteTasks.push(this.tasks[i]);
          }
        }
        this.tasks = incompleteTasks;
      }
    },
    computed: {

    }
  });
});

















