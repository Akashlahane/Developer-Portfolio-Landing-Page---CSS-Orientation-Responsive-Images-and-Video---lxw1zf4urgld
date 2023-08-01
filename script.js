let header=document.querySelector("header");
//header.classList.add("active");

let menu=document.querySelector("#menu");

menu.addEventListener("click",()=>{

    header.classList.toggle("active");
})

let navbar=document.querySelector(".navbar");

navbar.addEventListener("click",()=>{

   header.classList.toggle("active");
})