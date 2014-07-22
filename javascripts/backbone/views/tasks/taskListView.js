var ToDoList = ToDoList || { Models: {}, Collections: {}, Views: {} };

ToDoList.Views.TaskListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'all', this.render)
  },
  tagName: 'ul',
  render: function() {
    var that = this;
    this.$el.empty();
    _.each(this.collection.models, function(task) {
      var taskView = new ToDoList.Views.TaskView({model: task});
      that.$el.append(taskView.render().el);
    });
    return this;
  }
});
