const sumAll = function(a, b) {
    let total = 0;

    if (a < 0 || b < 0) return 'ERROR';
    if (isNaN(a) || isNaN(b)) return 'Error';

    let min = Math.min(a,b);
    let max = Math.max(a,b);

    for (let i = min; i <= max; i++) {
        total= total + i;    
    };
    return total;
};

// Do not edit below this line
module.exports = sumAll;
