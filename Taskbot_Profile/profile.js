const selectBar = document.getElementById('p-select');
const formDetails = document.getElementById('form-dets');

selectBar.addEventListener('click', () => {
    formDetails.classList.toggle('active')
})

const menuBar = document.querySelector('#mobilebar');
menuBarList = document.querySelector('#p-bar-menu');

menuBar.addEventListener("click", () => {
    menuBarList.classList.toggle("active");
});

const menuBars = document.querySelector('#mobilebar');
mainSection = document.querySelector('#main-section');

menuBars.addEventListener("click", () => {
    mainSection.classList.toggle("active");
});

const menuFBars = document.querySelector('#mobilebar');
footerSection = document.querySelector('#section-4');

menuFBars.addEventListener("click", () => {
    footerSection.classList.toggle("active");
});