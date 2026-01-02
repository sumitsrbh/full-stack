// write a function factorial(n) that calculates n! using recursive calls.

function factorial(n){
    if(n==1)return 1
    return n* factorial(n-1)
}
console.log("factorial",factorial(5));
