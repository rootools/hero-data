var should = require('should');
var heroData = require('../lib/main');


// Time Modules here
describe('heroData.time.now(\'DD.MM.YYYY hh:mm:ss\', \'numeric\')', function() {
	it('', function() {
		var result = heroData.time.now('DD.MM.YYYY hh:mm:ss', 'numeric');
		result.should.be.a('string').with.lengthOf(19);
	});
});

// Array Modules here
