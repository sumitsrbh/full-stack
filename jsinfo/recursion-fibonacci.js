// Write a function fib(n) that returns the n-th Fibonacci number.

function fib(n){
   let fib=[1,1]
   for(i=2;i<n; i++){
      fib[i]=fib[i-2]+ fib[i-1]
   }
   return fib[n-1]
}
console.log(`77th fib term=`, fib(1077));


function fibRec(n){
   return n <1 ? n : fib(n-1)+ fib(n-2)
}

console.log(`77th term fib recursion`,fibRec(1077));

function fibSimple(n){
   let a=1
   let b=1
   for(let i=3;i<=n;i++){
      let c= a+b
      a=b
      b=c
   }
   return b
}
