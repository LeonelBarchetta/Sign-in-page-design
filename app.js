const password = document.querySelector(".password")
const ojo = document.querySelector(".ojo")

ojo.addEventListener("click",function(){
    if(password.type=="password"){
        password.type= "text"
    }else{
        password.type="password"
    }
})