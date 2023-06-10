//setup date
const date = document.getElementById("date");
const dateText =  new Date().getFullYear();
date.innerHTML = dateText.toString();

// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
});

//close nav
navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
});

// setup new hack with toggle class
/*
navBtn.addEventListener("click", ()=>{
    navbar.classList.toggle("showNav")
})*/