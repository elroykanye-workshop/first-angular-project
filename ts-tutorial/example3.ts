// class child extends parent
class ParentClass {
    private i: number; 
    j: number;
    constructor (k: number) {
        this.j = k;
    }

    value() {
        return "The number is " + this.j;
    }
}

class ChildClass extends ParentClass {
    l : number;
    constructor(m: number, k: number) {
        super(k);
        this.l = m;
    }
    value() {
        return "Parent : " + this.j + " and Child : " + this.l;
    }
}


let myObject2 = new ChildClass(10, 20);
console.log(myObject2.value());