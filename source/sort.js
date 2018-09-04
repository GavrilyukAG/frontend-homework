'use strict';

const sort = (str) => {
    var subStr = str.toLowerCase().split(' ');
    return subStr.map((item) => {
        item = item.split('').sort((a, b) => a.localeCompare(b)).join('');
        return item.charAt(0).toUpperCase() + item.slice(1);
    }).sort().join(' ');
};
