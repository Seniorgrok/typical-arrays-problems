
exports.min = function min (array) {
    // if (array == undefined && !Array.isArray(array) && array.length === 0) {
    //     return 0;
    // }
    if (!array) {  // проверяем был ли передан параметр
        return 0;
    }

    if (!Array.isArray(array)) { // переданный параметр явялется массивом
        return 0;
    }

    if (array.length === 0) { // длинна массива больше нуля
        return 0;
    }

    return array.reduce(function (p, v) {   // функция reduce для каждого элемента массива применили функцию, описанную внутри reduce.
    if(p < v){
        return p
    }
    else{
        return v
    }
    // return ( p < v ? p : v ); // второй вариант
      });
}

exports.max = function max (array) {
    if (!array) {
        return 0;
    }

    if (!Array.isArray(array)) {
        return 0;
    }

    if (array.length === 0) {
        return 0;
    }

    return array.reduce(function (p, v) {
        return ( p > v ? p : v );
      });
}

exports.avg = function avg (array) {
    if (!array) {
        return 0;
    }

    if (!Array.isArray(array)) {
        return 0;
    }

    if (array.length === 0) {
        return 0;
    }
    // return array.reduce((p , v) => p + v) / array.length;
    // функция reduce применяет каждому элементу массива, функцию переданную внутрь как параметр
    return array.reduce(function(p , v){
        return p + v;
    }) / array.length     // второй вариант
}



// function getMaxOfArray(numArray) {
//     return Math.max.apply(null, numArray);
//   }


// Array.prototype.max = function() {
//     return Math.max.apply(null, this);
//   };

// Array.prototype.min = function() {
// return Math.min.apply(null, this);
// };


// console.log("Max value is: "+array.max()+"\nMin value is: "+ array.min());
