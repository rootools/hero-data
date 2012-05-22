function addNull(param) {
	if (param < 10) {
		param = '0' + param;
	} else {
    param = param.toString();
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

function uptime(miliseconds, type) {
  var seconds = (miliseconds / 1000).toFixed();
  var min = 0;
  var hour = 0;
  var day = 0;
  var month = 0;
  var year = 0;
  if(seconds > 59) {
    min = Math.floor(seconds / 60);
    seconds = seconds - (60 * min);
    if(min > 59) {
      hour = Math.floor(min / 60);
      min = min - (60 * hour);
      if(hour > 23) {
        day = Math.floor(hour / 24);
        hour = hour - (24 * day);
        if(day > 30) {
          month = Math.floor(day / 30);
          day = day - (30 * month);
          if(month > 11) {
            year = Math.floor(month / 12);
            month = month - (12 * year);
          }
        }
      }
    }
  }
  var resp = {};
  if(type == 'withOutNull') {
    resp.seconds = seconds;
    resp.minutes = min;
    resp.hours = hour;
    resp.days = day;
    resp.months = month;
    resp.years = year;
  }
  
  if(type == undefined) {
    resp.seconds = addNull(seconds);
    resp.minutes = addNull(min);
    resp.hours = addNull(hour);
    resp.days = addNull(day);
    resp.months = addNull(month);
    resp.years = addNull(year);
  }

  return resp;
}

exports.now = now;
exports.uptime = uptime;
