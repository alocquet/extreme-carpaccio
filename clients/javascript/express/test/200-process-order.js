var expect = require('chai').expect;
var process = require('../lib/process');

describe('process.order(payload, callback)', function () {
  it('calls back with an empty object', function (done) {
    process.order({}, function (err, result) {
      if (err) return done(err);
      expect(result).to.deep.equal({});
      done();
    })
  })
  it('calls back with a test', function (done) {
    process.order({ "prices": [4.1, 8.03, 86.83, 65.62, 44.82], "quantities": [10, 3, 5, 4, 5], "country": "AT", "reduction": "STANDARD" }, function (err, result) {
      if (err) return done(err);
      expect(result).to.deep.equal({total: 1166.62});
      done();
    })
  })
})
