import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchPosts: function  () {
      var searchQuery = this.get("searchQuery");
      this.transitionTo("search", searchQuery);
    },
    searchSubreddits: function  () {
      var searchQuery = this.get("searchQuery")
      this.transitionTo("posts", searchQuery)
    }
  }
});
