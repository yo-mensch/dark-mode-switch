//alert("All good");
const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme(event){
    console.log(event);
}

toggleSwitch.addEventListener('change', switchTheme);