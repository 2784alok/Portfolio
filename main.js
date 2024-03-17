var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("I");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("I")
    }
    event.currentTarget.classList.add("I");
    document.getElementById(tabname).classList.add("I")
}

var sidemeu = document.getElementById("sidemenu");

function openMenu() {
    sidemeu.style.right = "0";
}

function closeMenu() {
    sidemeu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menuIcon");
    var navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("show");
    });
});

let url='https://script.google.com/macros/s/AKfycbyRJZA6UyBBesf_eUbcCfjOrYme4MzT137bExUwXD3sW7UzPneNugmSXlZojodkMzwR/exec'
let form=document.querySelector("#form");
form.addEventListener("submit",(e)=>{
    let d=new FormData(form);
    fetch(url,{
        method:"POST",
        body:d
    }).then((res)>=res.text())
    .then((finalres)=>console.log(finalres))

    e.preventDefault();
})
  


