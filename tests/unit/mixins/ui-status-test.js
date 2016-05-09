import Ember from 'ember';
import UiStatusMixin from 'infra/mixins/ui-status';
import { module, test } from 'qunit';

module('Unit | Mixin | ui status');

// Replace this with your real tests.
test('it works', function(assert) {
  let UiStatusObject = Ember.Object.extend(UiStatusMixin);
  let subject = UiStatusObject.create();
  assert.ok(subject);
});
