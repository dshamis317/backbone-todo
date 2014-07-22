var ToDoList = ToDoList || { Models: {}, Collections: {}, Views: {} };

ToDoList.initialize = function() {
  var taskCollection = new ToDoList.Collections.TaskCollection();

  var taskListView = new ToDoList.Views.TaskListView({
    collection: taskCollection,
    el: $('.task_list')
  });

  $('.task_form').on('submit', function(e) {
    e.preventDefault();
    var taskField = $('.form_input')
    var task = taskField.val();
    taskField.val('');
    taskCollection.add({name: task});
  })
};

$(function() {
  ToDoList.initialize();
})
