//alert("All good");
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');

function switchTheme(event){
    // console.log(event.target.checked);
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

//prideti funkcija nuotrauku toggle'inimui kad isvengti pasikartojimo

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 /50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    img1.setAttribute('src', 'img/undraw_web_developer_p3e5_dark.svg');
    img2.setAttribute('src', 'img/undraw_composition_oskp_dark.svg');
    img3.setAttribute('src', 'img/undraw_Freelancer_re_irh4_dark.svg');
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    img1.setAttribute('src','img/undraw_web_developer_p3e5_light.svg');
    img2.setAttribute('src', 'img/undraw_composition_oskp_light.svg');
    img3.setAttribute('src', 'img/undraw_Freelancer_re_irh4_light.svg');
}

toggleSwitch.addEventListener('change', switchTheme);