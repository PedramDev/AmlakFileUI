String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.toPersianCharacter =  function () {
var string = this;
var obj = {
    'ك' :'ک',
    'دِ': 'د',
    'بِ': 'ب',
    'زِ': 'ز',
    'ذِ': 'ذ',
    'شِ': 'ش',
    'سِ': 'س',
    'ى' :'ی',
    'ي' :'ی',
    '١' :'۱',
    '٢' :'۲',
    '٣' :'۳',
    '٤' :'۴',
    '٥' :'۵',
    '٦' :'۶',
    '٧' :'۷',
    '٨' :'۸',
    '٩' :'۹',
    '٠' :'۰',
};

Object.keys(obj).forEach(function(key) {
    string = string.replaceAll(key, obj[key]);
});
return string
};

/**
* Example
*/

// var string = 'ك ٤ ٦٦';
// string  =  string.toPersianCharacter();
// console.log(string); //out put "ک ۴ ۶۶"