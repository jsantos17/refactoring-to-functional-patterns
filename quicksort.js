var __ = require('underscore');

var quicksort = function(toSort) {
   var pivot = toSort.shift();
   var lesser = __.filter(toSort, function(value) {
       if(value < pivot) return true;
   });
   var greater = __.filter(toSort, function(value) {
       if(value >= pivot) return true;
   });
   if(__.isEmpty(toSort)) return [];
   else
       return quicksort(lesser).concat([pivot], quicksort(greater));
};
