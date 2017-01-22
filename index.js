/* jshint node: true */
'use strict';

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

module.exports = {
  name: 'ember-reselect-shim',
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
