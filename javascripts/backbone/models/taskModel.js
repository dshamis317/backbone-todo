var ToDoList = ToDoList || { Models: {}, Collections: {}, Views: {} };

ToDoList.Models.Task = Backbone.Model.extend({
  defaults: {
    name: "Relax, You've had a tough week..."
  }
});
