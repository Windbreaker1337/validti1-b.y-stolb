const formLogin = document.getElementById("log-in");
const formReg = document.getElementById("reg");
const username1 = document.getElementById("username1"); 
const username = document.getElementById("username");
const email = document.getElementById("email"); 
const passwor1 = document.getElementById("password1");
const password = document.getElementById("password");
const confrimPassword = document.getElementById("confirmPassword"); 

const errorUsername1 = document.querySelector(".errorUsername1");
const errorEmail = document.querySelector(".errorEmail");
const errorPassword1 = document.querySelector(".errorPassword1");
const errorUsername = document.querySelector(".errorUsername");
const errorPassword = document.querySelector(".errorPassword");
const errorConfrimPassword = document.querySelector(".errorConfrimPassword");   

const btnChangeReg = document.getElementById("change-reg");
const btnChangeLogIn = document.getElementById("change-log-in");

const passBd = [ 
    { 
        username: 'Ivan' , 
        passwords: 'Qwed123',
    }, 
    {
        username: 'Petr' , 
        passwords: 'QweD123',
    }, 
    { 
        username: 'Vlad' , 
        passwords: 'QweD12344',
    }, 
    {
        username: 'Oleg' , 
        passwords: 'QweD1234@#$',
    }
] // initial data base

formLogin.addEventListener("submit" , (e) => { 
    e.preventDefault();
    
    if(username1.value.trim() === ' ') { 
        errorUsername1.textContent = "Username is required";
    }
    if(passwor1.value.trim === '') { 
        errorPassword1.textContent = "Password is required";
    }

    const user = passBd.find(item => item.username === username1.value && item.passwords === passwor1.value); 
    if(!user) { 
        errorUsername1.textContent = "Username or password is incorrect";
        errorPassword1.textContent = "Username or password is incorrect";
    }else { 
        alert('Success login');
        formLogin.remove();
    };
})

formReg.addEventListener("submit" , (e) => { 
    e.preventDefault();
    
    if(username.value.trim() === ' ') { 
        errorUsername.textContent = "Username is required";
    }
    if(email.value.trim() === '') { 
        errorEmail.textContent = "Email is required";
    }
    if(password.value.trim() === '') { 
        errorPassword.textContent = "Password is required";
    }
    if(confrimPassword.value.trim() !== password.value.trim()) { 
        errorConfrimPassword.textContent = "Passwords do not match";
    }

    if(username.value.trim() !== ' ' && email.value.trim() !== '' && password.value.trim() !== '' && confrimPassword.value.trim() === password.value.trim()) { 
        passBd.push({
            username: username.value , 
            passwords: password.value,
        });
        alert('Success register');
        formReg.reset();
    }

})

btnChangeReg.addEventListener("click" , () => { 
    const reg = document.querySelector(".reg"); 
    reg.classList.add("openReg");
    const login = document.querySelector(".log-in");
    login.classList.remove("openLogin");
    login.classList.add("login")
})

btnChangeLogIn.addEventListener("click" , () => { 
    const login = document.querySelector(".log-in"); 
    login.classList.add("openLogin");
    login.classList.remove("login");
    const reg = document.querySelector(".reg");
    reg.classList.remove("openReg");
})

