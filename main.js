// nav icon

const selectElement = function(el){
    return document.querySelector(el)
}

let menuToggle = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggle.addEventListener('click', function(){
    body.classList.toggle("open")
})