var ToDoList = ToDoList || { Models: {}, Collections: {}, Views: {} };

ToDoList.Models.Task = Backbone.Model.extend({
  defaults: {
    name: "Relax, You've had a tough week...",
    completed: false
  },
  toggle: function() {
    if (this.get('completed') === false) {
      this.set('completed', true);
    } else if (this.get('completed') === true ){
      this.set('completed', false);
    }
  }
});
