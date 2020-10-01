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
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

function imageToggle(color){
    img1.setAttribute('src', `img/undraw_web_developer_p3e5_${color}.svg`);
    img2.setAttribute('src', `img/undraw_composition_oskp_${color}.svg`);
    img3.setAttribute('src', `img/undraw_Freelancer_re_irh4_${color}.svg`);
}

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 /50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    imageToggle('dark');
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    imageToggle('light');
}

toggleSwitch.addEventListener('change', switchTheme);

//check local storage
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme==='dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}