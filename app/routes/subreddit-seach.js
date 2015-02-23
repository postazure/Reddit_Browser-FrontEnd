import Ember from 'ember';

export default Ember.Route.extend({
  model :function  (params) {
    var query = params.query
    return Ember.$.getJSON("http://www.reddit.com/subreddits/search.json?q="+query).then(function  (result) {
      console.log(result)
      return result.data.children;
    });
  }
});
