dlformSubmit = () => {
    let fname = document.getElementById("fname").value
    let mname = document.getElementById("mname").value
    let lname = document.getElementById("lname").value
    let parent = document.getElementById("parent").value
    let parentfname = document.getElementById("parentfname").value
    let parentmname = document.getElementById("parentmname").value
    let parentlname = document.getElementById("parentlname").value
    let fullname = document.getElementById("fullname").value
    let gender = document.gender.gender.value
    let dob = document.getElementById("dob").value
    let year = document.getElementById("year").value
    let placeofbirth = document.getElementById("placeofbirth").value
    let Countryofbirth = document.getElementById("Countryofbirth").value
    let qualification = document.getElementById("qualification").value
    let bloodgroup = document.getElementById("bloodgroup").value
    let landlineno = document.getElementById("landlineno").value
    let email = document.getElementById("email").value
    let no1 = document.getElementById("no1").value
    let no2 = document.getElementById("no2").value
    let applicantno = document.getElementById("applicantno").value
    let alternateno = document.getElementById("alternateno").value
    let identifymark1 = document.getElementById("identifymark1").value
    let identifymark2 = document.getElementById("identifymark2").value



    console.log(fname)
    console.log(mname)
    console.log(lname)
    console.log(parent)
    console.log(parentfname)
    console.log(parentmname)
    console.log(parentlname)
    console.log(fullname)
    console.log(gender)
    console.log(dob)
    console.log(year)
    console.log(placeofbirth)
    console.log(Countryofbirth)
    console.log(qualification)
    console.log(bloodgroup)
    console.log(landlineno)
    console.log(email)
    console.log(no1)
    console.log(no2)
    console.log(applicantno)
    console.log(alternateno)
    console.log(identifymark1)
    console.log(identifymark2)

    let obj = {
        fname: fname, mname: mname, lname: lname, parent: parent, parentfname: parentfname, parentmname: parentmname, parentlname: parentlname
        , fullname: fullname, gender: gender, dob: dob, year: year, placeofbirth: placeofbirth, Countryofbirth: Countryofbirth, qualification: qualification
        , bloodgroup: bloodgroup, landlineno: landlineno, email: email, no1: no1, no2: no2, applicantno: applicantno, alternateno: alternateno, identifymark1: identifymark1, identifymark2: identifymark2
    }
    let afterConvertString= JSON.stringify(obj)
    console.log(afterConvertString)
    let save=localStorage.setItem("login",afterConvertString)
    let getdata=localStorage.getItem("login")
    let getobj=JSON.parse(getdata)
    console.log(getobj.fullname)
    console.log(getobj.dob)
    console.log(getobj.placeofbirth)


}
