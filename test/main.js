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
      result.should.be.a('object').and.have.property('seconds', 49);
    });
});


// Array Modules here
