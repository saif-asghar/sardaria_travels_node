const signButton = document.getElementById('signButton');
const loginButton = document.getElementById('loginButton');

function redirect(){
    window.location = '/loginPage';
};

signButton.addEventListener('click', redirect);
loginButton.addEventListener('click', redirect);