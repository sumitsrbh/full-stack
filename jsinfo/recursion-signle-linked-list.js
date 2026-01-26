let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

/* Write a function printList(list) that outputs list items one-by-one. */

function printList(list){
   while(list){
    console.log(list.value)
    list=list.next
   }
}
printList(list)

function printListRec(list){
  if( list.next == null) return 
   console.log(list.value);
   printList(list.next)
}

// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

function printListRev(list){
  let arr=[]
  while(list){
   arr.push(list.value)
   list= list.next
  }
  for(let i= arr.length-1;i>=0;i--){
    console.log(arr[i]);
    
  }
}
printListRev(list)

console.log("rev rec");

// function printListRevRec(list){
//   if( list.next == null) return console.log(list.value);
//   printListRevRec(list.next)
//   console.log(list.value);  
// }

// more optimised 
function printListRevRec(list){
  if(list.next) printListRevRec(list.next)
    console.log(list.value);
}
printListRevRec(list)