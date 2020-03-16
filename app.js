const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputPassConf = document.querySelector("#passconf");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPassword = inputPassword.value
    const valueInputPassConf = inputPassConf.value; 

    let flag = 0;

    if(valueInputPassConf === valueInputPassword){
        flag = 1;
    }

    const warningMsg = document.querySelector(".warning");
    
    if(flag === 0){
        warningMsg.className = "text-danger";
    } else {
        alert("Registrasi Sukses");
    }
})

const DB_USER = [
    {
        username: inputUsername,
        password: inputPassword
    }
]



console.log(inputUsername);
console.log(inputPassword);
console.log(inputPassConf);
console.log(buttonSubmit);