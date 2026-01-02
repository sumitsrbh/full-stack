//  write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.

// iterative

function pow(x,n){
    let result=1
    for(let  i=0; i<n; i++){
        result *=x
    }
    return result
}

console.log('Result of (2,power 3) =>', pow(2,3));


// Recursive thinking: simplify the task and call self

function powRec(x,n){
    if(n==1){
        return x
    } else{
        return x* powRec(x,n-1)
    }
}

function powRecr(x,n){
    return (n==1) ? x : (x*powRec(x, n-1))
}

console.log('Result of (2,power rec 4) =>', powRecr(2,4)); 

// Recursive traversasls

let company={
    sales:[
        {
            name: "John",
            salary:1000
        },
        {
            name: 'Alice',
            salary:1600
        }
    ],

    development:[
        {
            sites:[
                {
                    name:"Peter",
                    salary: 2000
                },
                {
                    name:"Alex",
                    salary:1800
                }
            ],
            internals:[
                {
                    name:"Jack",
                    salary:2100
                }
            ]
        }
    ]
}

// write a function that calculates the sum of all salaries
for(let data in company){
    console.log(data)
} 

