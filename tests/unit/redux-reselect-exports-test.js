import { test, module } from 'qunit';
import reselect from 'reselect';

const { createSelector } = reselect;

module('reselect export tests');

test('exports function', function(assert) {
  assert.equal(typeof createSelector, 'function');
});
