var ToDoList = ToDoList || { Models: {}, Collections: {}, Views: {} };

ToDoList.Views.TaskView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'all', this.render);
  },
  tagName: 'li',
  template: _.template($('#task-template').html()),
  render: function() {
    var that = this;
    var renderedHTML = this.template({task: this.model.toJSON()});
    this.$el.html(renderedHTML);
    return this;
  }
})
