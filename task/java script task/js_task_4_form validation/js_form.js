
let result

getdata = () => {
    let fname = document.getElementById("fname").value;
    let button = document.getElementById("button");

    if (fname.length > 3 && fname.length < 20) {
        result = 1
        document.getElementById("a").innerHTML = ' <b style="color:green">Name is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result = 0

        document.getElementById("a").innerHTML = '<b style="color:red">Name is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result1
getdata1 = () => {

    let mname = document.getElementById("mname").value;
    let button = document.getElementById("button");

    if (mname.length > 3 && mname.length < 20) {
        result1 = 1
        document.getElementById("b").innerHTML = ' <b style="color:green">Name is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result1 = 0

        document.getElementById("b").innerHTML = '<b style="color:red">Name is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result2

getdata2 = () => {


    let lname = document.getElementById("lname").value;
    let button = document.getElementById("button");

    if (lname.length >= 1 && lname.length < 10) {
        result2 = 1
        document.getElementById("c").innerHTML = ' <b style="color:green">Name is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result2 = 0

        document.getElementById("c").innerHTML = '<b style="color:red">Name is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result3

getdata3 = () => {
    let parentname = document.getElementById("parent").value;
    let button = document.getElementById("button");

    if (parentname !== " ") {
        result3 = 1
        document.getElementById("d").innerHTML = ' <b style="color:green"> Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result3 = 0

        document.getElementById("d").innerHTML = '<b style="color:red"> Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result4
getdata4 = () => {

    let parentfname = document.getElementById("parentfname").value;
    let button = document.getElementById("button");

    if (parentfname.length > 3 && parentfname.length < 20) {
        result4 = 1
        document.getElementById("e").innerHTML = ' <b style="color:green">Name is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result4 = 0
        document.getElementById("e").innerHTML = '<b style="color:red">Name is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}


let result5
getdata5 = () => {

    let parentmname = document.getElementById("parentmname").value;
    let button = document.getElementById("button");

    if (parentmname.length >= 3 && parentmname.length < 20) {
        result5 = 1
        document.getElementById("f").innerHTML = ' <b style="color:green">Name is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result5 = 0

        document.getElementById("f").innerHTML = '<b style="color:red">Name is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}


let result6
plname = () => {

    let parentlname = document.getElementById("parentlname").value;
    let button = document.getElementById("button");

    if (parentlname.length >= 1 && parentlname.length < 10) {
        result6 = 1
        document.getElementById("g").innerHTML = ' <b style="color:green">Name is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result6 = 0

        document.getElementById("g").innerHTML = '<b style="color:red">Name is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result7

funame = () => {

    let fulname = document.getElementById("fullname").value;
    let button = document.getElementById("button");

    if (fulname.length >= 3 && fulname.length < 10) {
        result7 = 1
        document.getElementById("h").innerHTML = ' <b style="color:green">Name is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result7 = 0
        document.getElementById("h").innerHTML = '<b style="color:red">Name is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result8
dateofbirth = () => {
    let datebirth = document.getElementById("dob").value;
    let button = document.getElementById("button");

    if (datebirth !== " ") {
        result8 = 1
        document.getElementById("i").innerHTML = ' <b style="color:green"> Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result8 = 0
        document.getElementById("i").innerHTML = '<b style="color:red"> Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result9

number1 = () => {

    let num = document.getElementById("year").value;
    let button = document.getElementById("button");

    if (num.length >= 1 && num.length < 3) {
        result9 = 1
        document.getElementById("j").innerHTML = ' <b style="color:green">age is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result9 = 0

        document.getElementById("j").innerHTML = '<b style="color:red">age is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}


let result10

placebir = () => {

    let placeofbir = document.getElementById("placeofbirth").value;
    let button = document.getElementById("button");

    if (placeofbir.length >= 1 && placeofbir.length < 20) {
        result10 = 1
        document.getElementById("k").innerHTML = ' <b style="color:green">place is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result10 = 0

        document.getElementById("k").innerHTML = '<b style="color:red">place is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result11


couname = () => {

    let countryname = document.getElementById("Countryofbirth").value;
    let button = document.getElementById("button");

    if (countryname !== " ") {
        result11 = 1
        document.getElementById("l").innerHTML = ' <b style="color:green">country is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result11 = 0
        document.getElementById("l").innerHTML = '<b style="color:red">country is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result12

quali = () => {

    let degree = document.getElementById("qualification").value;
    let button = document.getElementById("button");

    if (degree !== " ") {
        result12 = 1
        document.getElementById("m").innerHTML = ' <b style="color:green"> Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result12 = 0

        document.getElementById("m").innerHTML = '<b style="color:red"> Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}


let result13
bloodgr = () => {

    let blood = document.getElementById("bloodgroup").value;
    let button = document.getElementById("button");

    if (blood !== " ") {
        result13 = 1
        document.getElementById("n").innerHTML = ' <b style="color:green">bloodgroup is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result13 = 0

        document.getElementById("n").innerHTML = '<b style="color:red">bloodgroup is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}


let result14
landline = () => {

    let landnum = document.getElementById("landlineno").value;
    let button = document.getElementById("button");

    if (landnum.length == 10) {
        result14 = 1
        document.getElementById("o").innerHTML = ' <b style="color:green">Number is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result14 = 0

        document.getElementById("o").innerHTML = '<b style="color:red">Number is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}


let result15
appmobilenum = () => {

    let mobnum = document.getElementById("applicantno").value;
    let button = document.getElementById("button");

    if (mobnum.length == 10) {
        result15 = 1
        document.getElementById("p").innerHTML = ' <b style="color:green">Number is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result15 = 0

        document.getElementById("p").innerHTML = '<b style="color:red">Number is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result16

altmobilenum = () => {


    let mobnum = document.getElementById("alternateno").value;
    let button = document.getElementById("button");

    if (mobnum.length == 10) {
        result16 = 1
        document.getElementById("q").innerHTML = ' <b style="color:green">Number is Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result16 = 0
        document.getElementById("q").innerHTML = '<b style="color:red">Number is Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result17

iden1 = () => {
    let mark1 = document.getElementById("identifymark1").value;
    let button = document.getElementById("button");

    if (mark1.length > 3 && mark1.length < 20) {
        result17 = 1
        document.getElementById("r").innerHTML = ' <b style="color:green"> Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result17 = 0

        document.getElementById("r").innerHTML = '<b style="color:red"> Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result18

iden2 = () => {
    let mark2 = document.getElementById("identifymark2").value;
    let button = document.getElementById("button");

    if (mark2.length > 3 && mark2.length < 20) {
        result18 = 1
        document.getElementById("s").innerHTML = ' <b style="color:green"> Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result18 = 0

        document.getElementById("s").innerHTML = '<b style="color:red"> Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}

let result19
email = () => {
    let email1 = document.getElementById("email3").value;
    let button = document.getElementById("button");

    if (email1.length!=" ") {
        result19 = 1
        document.getElementById("t").innerHTML = ' <b style="color:green"> Valid<b>'

        button.removeAttribute("disabled", " ")
    }
    else {
        result19 = 0
        document.getElementById("t").innerHTML = '<b style="color:red"> Invalid<b>'
        button.setAttribute("disabled", " ")

    }
}


callresult = () => {
    if (result == 1 && result1 == 1 && result2 == 1 && result3 == 1 && result4 == 1 && result5 == 1 && result6 == 1 &&
         result7 == 1 && result8 == 1 && result9 == 1 && result10 == 1 && result11 == 1 && result12 == 1 && result13 == 1 &&
          result14 == 1 && result15 == 1 && result16 == 1 && result17 == 1 && result18 == 1 && result19 == 1)
          {
            button.removeAttribute("disabled", " ")
            window.location.href="./sample.html"
          }
   
else{
    button.setAttribute("disabled", " ")
}
}
