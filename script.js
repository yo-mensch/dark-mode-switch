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
        toggleDarkLightMode(true);
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

function imageToggle(color){
    img1.setAttribute('src', `img/undraw_web_developer_p3e5_${color}.svg`);
    img2.setAttribute('src', `img/undraw_composition_oskp_${color}.svg`);
    img3.setAttribute('src', `img/undraw_Freelancer_re_irh4_${color}.svg`);
}

function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 /50%)' : 'rgb(255 255 255 /50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 /50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'); 
    isDark ? imageToggle('dark') : imageToggle('light');
}

toggleSwitch.addEventListener('change', switchTheme);

//check local storage
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme==='dark'){
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}