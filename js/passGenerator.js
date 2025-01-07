function copyPassword(){
    const newImg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;
const password=document.getElementById("inputbox");
document.getElementById("copy").innerHTML=newImg;
document.getElementById("inputbox").select();
document.execCommand("copy");
}
function generatePassword(){
    const length=16;
    const charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?><:{}[]";
    let password="";
    for(let i=0;i<length;i++){
        const at=Math.floor(Math.random()*charset.length);
        password+=charset.charAt(at);
    }
    document.getElementById("inputbox").value=password;
   
}