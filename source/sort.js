'use strict';

const sort = (str) => { 
   let subStr = str.toLowerCase().split(' '); 
   return subStr.map((item) => {
      let sortedWord = item.split('').sort((sym1, sym2) => sym1.localeCompare(sym2)).join('');
      return sortedWord.charAt(0).toUpperCase() + sortedWord.slice(1);
   }).sort((wrd1, wrd2) => wrd1.localeCompare(wrd2)).join(' ');
};

