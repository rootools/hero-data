var should = require('should');
var heroData = require('../lib/main');

describe('heroData.time.now(\'numeric\', \'DD.MM.YYYY hh:mm:ss\')', function() {
	it('aa', function() {
		var result = heroData.time.now('numeric', 'DD.MM.YYYY hh:mm:ss');
		result.should.be.a('string').with.lengthOf(19);
	});
});
