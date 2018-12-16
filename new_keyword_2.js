//console.log(this)
function fun () {
    this.p = "something";
    return 10;
}
let o1 = fun();
let o2 = new fun();
// new keyboard does autoboxing
console.log(o1)
console.log(o2)
console.log(o1.p)
console.log(o2.p)
//with new the entire new box is returned