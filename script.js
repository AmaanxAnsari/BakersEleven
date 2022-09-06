// const light = document.getElementById('light')

// light.addEventListener('change', () => {
// document.body.classList.toggle('image-dark');
// });

// var light = document.getElementById('light');

// light.addEventListener('click', () =>{
//     document.body.style.backgroundImage = "url('../BakersEleven/img/Background.png')"
// });

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const text1 = document.getElementById('tagline');
const text2 = document.getElementById('tab-btn');
const text3 = document.getElementById('tab-btn1');
const text4 = document.getElementById('tab-btn2');
const text5 = document.getElementById('tab-btn3');
// const moon = document.getElementsByClassName('bi bi-moon-fill');
// console.log(moon);

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-brightness-high-fill');
    if (this.classList.toggle('bi-moon-fill')) {
        body.style.backgroundImage = "url('../BakersEleven/img/Background.png')";
        body.style.transition = '1.5s';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
        body.style.height = '100vh';
        body.style.backgroundPosition = 'fixed';
        text1.style.color = 'white';
        text2.style.color = 'white';
        text3.style.color = 'white';
        text4.style.color = 'white';
        text5.style.color = 'white';
        toggle.style.height = '20px';

    } else {
        body.style.backgroundImage = "url('../BakersEleven/img/Background3.png')";
        body.style.transition = '1.5s';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
        body.style.height = '100vh';
        body.style.backgroundPosition = 'fixed';
    }
})