/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0) return 0
    if(n===1) return 1
    return fib(n-1)+fib(n-2)
    
};


// f(n) = f(n-1)+f(n-2)
// f(0) =0
// f(1) =1
// f(2) = 1 f(1)+f(0) : 1+0 = 1

// f(5) = f(4)+f(3) =>3+2 =5
// f(4) = f(3) + f(2) =>2+1 =3
// f(3) =f(2)+f(1) => 2
// f(2) = f(1) +f(0) > 1