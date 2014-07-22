var ToDoList = ToDoList || { Models: {}, Collections: {}, Views: {} };

ToDoList.Models.Task = Backbone.Model.extend({
  defaults: {
    task: "Relax, You've had a tough week..."
  }
});
