const formSubmit = () => {
    let form =document.getElementById("form").value
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phnum = document.getElementById("phnum").value;
    let password = document.getElementById("password").value;
    let confirm  = document.getElementById("confirm password").value;
    let male  = document.getElementById("male").value;
    let female  = document.getElementById("female").value;
    let check  = document.getElementById("check").value;
    let city = document.getElementById("city").value;


   console.log(form)
    console.log(name);
    console.log(email);
    console.log(phnum);
    console.log(password);
    console.log(confirm);
    console.log(male);
    console.log(female);
    console.log(check);
    console.log(city);
 
    if(password==confirm)
    {
        console.log(true)
    }
    else{
        alert("password doesn't match")
    }

}