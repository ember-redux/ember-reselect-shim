/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'reselect',

  /**
   * Workaround needed for 2.12+
   * see: https://github.com/ember-redux/ember-redux/issues/105#issuecomment-288001558
   * @returns {boolean} Set to true to force JS compile
   * @private
   */
  _shouldCompileJS: function () {
    return true
  },

  treeForAddon (tree) {
    const reselectPath = path.dirname(require.resolve('reselect/src/index.js'))
    let reselectTree = this.treeGenerator(reselectPath)

    if (!tree) {
      return this._super.treeForAddon.call(this, reselectTree)
    }

    const trees = mergeTrees([reselectTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
