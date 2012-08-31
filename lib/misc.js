function randomString(length) {
  var result = '';
  if(!length) {
    length = 8;
  }

  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for(var i=0;i<length;i++) {
    var Rchar = Math.floor(Math.random() * (62));
    result+= chars[Rchar];
  }

  return result;
}

exports.randomString = randomString;
