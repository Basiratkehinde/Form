


let formv = document.getElementById('formv')
let name= document.getElementById('name')
let third= document.getElementById('third')
let fourth= document.getElementById('fourth')
let fifth= document.getElementById('fifth')
let sixth= document.getElementById('sixth')
let seventh= document.getElementById('seventh')
let eighth= document.getElementById('eighth')
let ninth=document.getElementById('ninth')
formv.addEventListener('submit',function(e){
    e.preventDefault();
    if(name.value == "" ){
     document.getElementById('nameErr').innerHTML="Name is required"
    }
    if(third.value == "" ){
        document.getElementById('emailErr').innerHTML="Email is required"
    }
    if(fourth.value == "" ){
        document.getElementById('addressErr').innerHTML="Address is required"
    
    }
    if(fifth.value == "" ){
        document.getElementById('passwordErr').innerHTML="Password is required"
    }
    if(sixth.value == ""){
        document.getElementById('confirm passwordErr').innerHTML="Confirm password is required"
    }
    if(seventh.value == ""){
        document.getElementById('telephoneErr').innerHTML="Confirm password is required"
    }
    if(eighth.value == ""){
        document.getElementById('ageErr').innerHTML="Age is required"
    }

    else{
        alert("Login successfully")
    }
})

const text = "i love javascript"
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase())
console.log(text.includes("love"))
console.log(text.trim())
console.log(text.trimStart())
console.log(text.trimEnd())
console.log(text.search("javascript"))