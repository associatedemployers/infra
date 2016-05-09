import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: [ 'application__navigation' ],

  actions: {
    toggleSidebar () {
      Ember.$('.ui.sidebar').sidebar('toggle');
    }
  }
});
