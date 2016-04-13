'use strict';

var expect = require('chai').expect;


describe('to-upper', function () {

  var toUpper = require('../../');

  it('common test', function () {
    expect(toUpper('--FOO-BAR--')).to.be.equal('--foo-bar--');
    expect(toUpper('FOOBar')).to.be.equal('foobar');
    expect(toUpper('__FOO_BAR__')).to.be.equal('__foo_bar__');
  });
});
