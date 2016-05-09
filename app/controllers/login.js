import Ember from 'ember';
import uiStatus from '../mixins/ui-status';

export default Ember.Controller.extend(uiStatus, {
  actions: {
    submit () {
      this.start();
    }
  }
});
