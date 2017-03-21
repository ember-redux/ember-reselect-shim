/* jshint node: true */
'use strict'

module.exports = {
  name: 'reselect',
  options: {
    nodeAssets: {
      'reselect': {
        vendor: ['dist/reselect.js']
      }
    }
  },
  included () {
    this._super.included.apply(this, arguments);
    this.import('vendor/reselect/dist/reselect.js', {
      using: [{transformation: 'amd', as: 'reselect'}]
    })
  }
}
