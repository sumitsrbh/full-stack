/* Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050 */

/* 
Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula. */


 function sumTo(n){
    let sum=0
    for(let i=1;i<=n;i++){
        sum+=i
    }
    return sum
 }

 console.log(sumTo(100000000000));
 
 function sumToRec(n){
    if(n==1) return 1
    return n+sumToRec(n-1)
 }

 console.log("rec sum",sumTo(100000000000));
 
 function sumToArtPrg(n){
    return n*(n+1)/2
 }

 console.log("aritmatic progression",sumToArtPrg(100000000000))
 