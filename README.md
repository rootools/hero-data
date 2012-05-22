# Install
```
npm install hero-data
```
# Usage
```
var hd = require('hero-data');

var nowTime = hd.time.now('numeric', 'DD.MM.YYYY hh:mm:ss');
console.log(nowTime); // Show: "22.05.2012 13:50:39"
```

## Time Module
### .now(_format_,_type_)
* _type_ String
* _format_ String

Get current date and return formated string.

Set _format_ to define return view(e.g. "DD.MM.YYYY hh:mm:ss"). Used Variables: DD - day(2 digits), MM - month(2 digits), YYYY - year(4 digits), hh - hour(2 digits), mm - minute(2 digits), ss - seconds(2 digits). Set _type_ to define numerical or words form(_numeric_).

**Example**
```
var nowTime = hd.time.now('numeric', 'DD.MM.YYYY hh:mm:ss');
console.log(nowTime); // Show: "22.05.2012 13:50:39"
```

### .uptime(_miliseconds_)
* _miliseconds_ Integer

Get miliseconds and return time between 0 and _miliseconds_.

**Example**
```
var uptime = hd.time.uptime(783409120); // return object "{ seconds: 49, minutes: 36, hours: 1, days: 9, month: 0, years: 0 }"
// Use process.uptime();
var nuptime = hd.time.uptime(Math.floor(process.uptime() * 1000));
```
