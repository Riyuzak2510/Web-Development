let p = {
    a : 10
}
let q = Object.create(p)
q.b = 20;

let r = Object.create(q)
r.c = 30;

console.log(p)
console.log(q)
console.log(r)
//console.log(r.a)
console.log(r.__proto__ === q)
// in case of q.a++ which means q.a = q.a + 1  due to which a new q.a entry is created inside q
//means any change in q.a inflicts change in r but not in p 