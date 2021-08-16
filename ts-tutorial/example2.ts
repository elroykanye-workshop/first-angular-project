let b: boolean = false;
console.log(b);

let c: number = 10;
console.log(c);

let firstName: string = "Edureka";
console.log(firstName);

// array
let aa: string[] = ["Edureka", "Java"];
let ab: Array<String> = ["Python", "Java"];

// tuple
let ta: [string, number] = ["Edureka", 10];

// enum
enum fruit {
    Apple = 1,
    Bannana,
    Orange,
    Mango
}
// // method 1 : to get the value of const
console.log(fruit.Apple);

// // method 2: to get the name of the const at index
let fruitName: string = fruit[2];
console.log(fruitName);


// any 
let ag: any;
ag = "Edureka";
ag = 10;


// objects

// // sample example with functions
function myFunc() {
    for (let i=1; i<=2; i++) {
        console.log("Welcome to Edureka");
    }
    // console.log("Final value of i is : " + i);
}
myFunc();

// // type assertion
let myvr;
// let myvr2 : number = (myvr as string).split();
// let myvr2 : number = (<string>myvr).split();


// functions
// // named
function product(x: number, y: number) {
    return x * y;
}
console.log(product(2,3));
// anonymous
let w = function(x: number, y: number) {
    return x * y;
}
console.log(w(3,3));
// arrow function
let v = (x: number, y: number) => x * y;


// classes
class myClass {
    j: number;
    constructor (k: number) {
        this.j = k;
    }

    value() {
        return "The number is " + this.j;
    }
}

let myObject = new myClass(10);
console.log(myObject.value());