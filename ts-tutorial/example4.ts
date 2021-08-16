interface MyIntegers {
    s : number;
    t : string;

    myFunc();

}

class A implements MyIntegers {
    s : number;
    t : string;

    constructor(s: number, t: string) {
        this.s = s;
        this.t = t;
    }

    myFunc() {
        console.log("Implementing an interface " + this.s + " " +  this.t);
    }
}

let oT = new A(3, "Elroy Kanye");
oT.myFunc()