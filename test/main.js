var should = require('should');
var heroData = require('../lib/main');


// Time Modules here
describe('heroData.time.now(\'DD.MM.YYYY hh:mm:ss\', \'numeric\')', function() {
	it('', function() {
		var result = heroData.time.now('DD.MM.YYYY hh:mm:ss', 'numeric');
		result.should.be.a('string').with.lengthOf(19);
	});
});

describe('heroData.time.uptime(\'783409120\')', function() {
    it('', function() {
      var result = heroData.time.uptime(783409120);
      result.should.be.a('object').and.have.property('days', '09');
    });
    it('args: withOutNull', function() {
      var result = heroData.time.uptime(783409120, 'withOutNull');
      result.should.be.a('object').and.have.property('days', 9);
    });
});


// Array Modules here
