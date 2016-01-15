var should = require('should');
var LookIP = require('../lib');

var lookup = new LookIP();

describe('Common lookup', function() {
  it('should find some info about 8.8.8.8', function () {

    should(lookup.lookup('8.8.8.8')).have.property('country');

  });

});
