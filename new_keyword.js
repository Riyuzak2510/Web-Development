function Fruit(color, taste) {
    this.color = color;
    this.taste = taste;
}

let orange = new Fruit("orange","sour")
let apple = new Fruit("red","sweet")
let mango = {
    color : "yellow", taste: "sweet"
}
console.log(orange)
console.log(apple)
console.log(mango)
/*the difference between mango and apple is that a new  class has been created fot the apple"*/