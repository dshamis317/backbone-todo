var ToDoList = ToDoList || { Models: {}, Collections: {}, Views: {} };

ToDoList.Collections.TaskCollection = Backbone.Collection.extend({
  model: ToDoList.Models.Task
});
