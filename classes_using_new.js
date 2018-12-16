function Person(name, age)
{
    this.firstName = name.split(" ")[0]
    this.lastname = name.split(" ")[1]
    //this.age = age we can see using the statement below or age variable has gone private
    let mAge = age // can also directly use age for private ..
    this.isAdult = function() {
        return mAge > 18
    }
}
let p = new Person("John Smith",30)
let h = new Person("Harry Potter",12)
console.log(p);
console.log(p.isAdult())
console.log(h.isAdult())