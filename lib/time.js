function addNull(param) {
	if (param < 10) {
		param = '0' + param;
	}
	return param;
}

function now(format, type) {
	if(type == 'numeric' || type == '') {
		var nowDate = new Date();
		
		var DD = addNull(nowDate.getDate());
		var MM = addNull(nowDate.getMonth() + 1);
		var YYYY = nowDate.getFullYear();
		var hh = addNull(nowDate.getHours());
		var mm = addNull(nowDate.getMinutes());
		var ss = addNull(nowDate.getSeconds());
		var res = format.replace('DD', DD);
		var res = res.replace('MM', MM);
		var res = res.replace('YYYY', YYYY);
		var res = res.replace('hh', hh);
		var res = res.replace('mm', mm);
		var res = res.replace('ss', ss);
		
	  return res;
	}
}

exports.now = now;
