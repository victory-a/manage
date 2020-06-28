function selectElement(element) {
  return document.querySelector(element);
}

let menuToggler = selectElement(".nav-toggle");
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
  body.classList.toggle("open")
})
