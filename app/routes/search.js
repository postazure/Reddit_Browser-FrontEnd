import Ember from 'ember';

export default Ember.Route.extend({
  model :function  (params) {
    var query = params.query
    return Ember.$.getJSON("http://www.reddit.com/search.json?q="+query).then(function  (result) {
      return result.data.children;
    });
  }
});
