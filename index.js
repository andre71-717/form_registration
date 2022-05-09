let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let phoneNumber = document.getElementById("phoneNumber")
let zipcode = document.getElementById("zipcode")
let about = document.getElementById("about")

let registationForm =()=>{

    if(name.value.length < 2 || name.value.length > 10){
        alert("Name length should be more then 2 and less then 10")
        name.style.borderColor = "red"
        return false
    }

    if(!email.value.includes("@gmail.com") && !email.value.includes("@mail.com")){
        alert("Your mail must contain @mail.com or @gmail.com")
        email.style.borderColor = "red"
        return false
    }

    if(password.value.length < 5 ){
        alert("Password length must be more then 5")
        password.style.borderColor = "red"
        return false
    }

    if(!phoneNumber.value[0] === 0 || phoneNumber.value.length !== 9){
        alert("Phone number length must be 9 characters long and first digit should be 0")
        phoneNumber.style.borderColor = "red"
        return false
    }

   if(zipcode.value.length < 5 || zipcode.value.length > 5){
       alert("Zip code length should be 5")
       zipcode.style.borderColor = "red"
       return false
   }

   if(about.value === ""){
       alert("Writing about yourself is required")
       about.style.borderColor = "red"
       return false
   }


return true

}



// let arman = "true";
// console.log(arman == true && arman == false)