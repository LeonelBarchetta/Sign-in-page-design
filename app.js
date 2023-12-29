const password = document.querySelector(".password")
const ojo = document.querySelector(".ojo")
const ojo2 =document.querySelector(".ojo2")

ojo.addEventListener("click",function(){
    if(password.type=="password"){
        password.type= "text"
        ojo.style.display = "none";
        ojo2.style.display = "block";

    }
    // else{
    //     password.type="password"
    // }
})

ojo2.addEventListener("click",function(){
    if(password.type=="text"){
        password.type="password";
        ojo2.style.display= "none";
        ojo.style.display= "block";
    }
})