let number = [10, 20, 30, 40, 50, 70, 80];
for (i = 0; i < number.length; i++) { console.log(number[i]) }


let numbe = [10, 90, 55, 40, 50, 78, 80];
numbe.push(90);
console.log(numbe);

numbe.unshift(70)
console.log(numbe);

numbe.pop()
console.log(numbe);

numbe.shift(90)
console.log(numbe);

let index = numbe.indexOf(2)
console.log(index);

let inde = numbe.indexOf(50)
console.log(inde);



console.log(numbe.sort(function sort(a, b) {
    let sorting = a - b
    return sorting
}));


console.log(numbe.sort().reverse(function sort(a, b) {
    let sorting = a - b
    return sorting
}));

let splice = numbe.splice(0, 1, 60)
console.log(splice);
console.log(numbe);

let slice = numbe.slice(0, 3)
console.log(slice);
console.log(numbe);

//data 2//

let letters = ["S", "V", "C", "P", "M"];
for (i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}


let letter = ["B", "D", "A", "E", "C", "G"]
console.log(letter);

letter.push("F")
console.log(letter);

letter.unshift("J")
console.log(letter);

letter.pop()
console.log(letter);

letter.shift()
console.log(letter);

let order = letter.indexOf("A")
console.log(order);

let orde = letter.indexOf("T")
console.log(orde);

console.log(letter.sort(function sort(a, b) {
    let sorting = a - b
    return sorting
}));



console.log(letter.sort().reverse(function sort(a, b) {
    let sorting = a - b
    return sorting
}));


let splicea = letter.splice(3, 1, "S")
console.log(splicea)
console.log(letter)

let slicea = letter.slice(0, 4)
console.log(slicea)

//data 3//

let b = ["chethan", "pramod", "shashank", "veeresh", "manoj"]
for (i = 0; i < b.length; i++) {
    console.log(b[i]);
}

let c = ["chethan", "pramod", "shashank", "veeresh", "manoj"]
console.log(c)

c.push("abhi")
console.log(c);

c.unshift("abhi")
console.log(c);

c.pop()
console.log(c);

c.shift()
console.log(c);

let cc = c.indexOf("pramod")
console.log(cc);


console.log(c.sort().reverse((function sort(a, b) {
    let sorting = a - b;
    return sorting
})))



let c1 = c.splice(0, 2, "abhi")
console.log(c1)
console.log(c);

let c2 = c.slice(0, 3)
console.log(c2);

//data 4//

let city = ["mysore", "bangalore", "mandya", "ramanagara"]
for (i = 0; i < city.length; i++) {
    console.log(city[i])
}

city.push("maddhur")
console.log(city);

city.unshift("maddhur")
console.log(city);


city.pop()
console.log(city);

city.shift("maddhur")
console.log(city);


console.log("goa")
let cityName = city.sort()
console.log("-----------------------------------       "+cityName)

console.log(city.sort().reverse((function sort(a, b) {
    let sorting = a - b
    return sorting
})))

let d = city.splice(0, 2, "manglore")
console.log(city);

let d1 = city.slice(0, 1)
console.log(d1);




//data 5//

let arr1 = [10, 20, 30,]
let arr2 = [, 40, 50, 60]
console.log(arr1 + arr2)
