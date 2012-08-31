[![build status](https://secure.travis-ci.org/rootools/hero-data.png)](http://travis-ci.org/rootools/hero-data)
# Install
```
npm install hero-data
```
# Usage
```
var hd = require('hero-data');

var nowTime = hd.time.now('DD.MM.YYYY hh:mm:ss', 'numeric');
console.log(nowTime); // Show: "22.05.2012 13:50:39"
```

## Time Module
### .now(_format_, _type_)
* _format_ String
* _type_ String(optional)

Get current date and return formated string.

Set _format_ to define return view(e.g. "DD.MM.YYYY hh:mm:ss"). Used Variables: DD - day(2 digits), MM - month(2 digits), YYYY - year(4 digits), hh - hour(2 digits), mm - minute(2 digits), ss - seconds(2 digits). Set _type_ to define numerical or words form(_numeric_).

**Example**
```
var nowTime = hd.time.now('DD.MM.YYYY hh:mm:ss', 'numeric');
console.log(nowTime); // Show: "22.05.2012 13:50:39"
```

### .uptime(_miliseconds_, _type_)
* _miliseconds_ Integer
* _type_ String(optional)

Get miliseconds and return time between 0 and _miliseconds_.

Type varios: _withOutNull_(integer output). Default: _undefined_(string output).

**Example**
```
var uptime = hd.time.uptime(783409120, 'withOutNull'); // return object "{ seconds: 49, minutes: 36, hours: 1, days: 9, months: 0, years: 0 }"

var stringUptime = hd.time.uptime(783409120); // return object "{ seconds: '49', minutes: '36', hours: '01', days: '09', months: '00', years: '00' }"

// Use process.uptime();
var nuptime = hd.time.uptime(Math.floor(process.uptime() * 1000));
```

## Misc Module
### .randomString(_length_)
* _length_ Integer(Optional)

Generates a random string of numbers and uppercase and lowercase letters. Default _length_ is 8.

**Example**
```
var rand = hd.misc.randomString();
console.log(rand);  //  Example Show: "zr24pqg7"
```
