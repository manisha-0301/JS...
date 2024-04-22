//Map

const arr=[20,2,10,5,3]

console.log(arr.map(double))

function double(x){
    return x*2
}

function triple(x){
    return x*4
}
console.log(arr.map(triple))

function binary(x){
    return x.toString(2);
}
console.log(arr.map(binary));

//Filter(Checks if true or false, only true value are returned)
const array=[9,8,7,6,5];

console.log(array.filter(isEven))

function isOdd(x){
    return x % 2
}
function isEven(x){
    return x % 2 === 0
}

//Reduce (it does not reduce anything)

function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log((findSum(arr)));

const output = arr.reduce(function(acc, curr){
    acc=acc+curr;
    return acc;
})
console.log(output)
const users =[
    {firstname: "Manisha", lastname: "Choudhury", age: 25},
    {firstname: "Manish", lastname: "Choudhury", age: 24},
    {firstname: "Mansi", lastname: "Choudhury", age: 30},
]

const fname =  users.reduce(function(acc, curr){
    if(curr.age<=30){
        acc = acc + " " + curr.firstname + " "+ curr.lastname;
    }
    return acc;
})

console.log(fname);