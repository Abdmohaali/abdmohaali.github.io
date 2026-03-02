document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#username").addEventListener("change", checkUsername);
document.querySelector("#signupForm").addEventListener("submit", function(event) {
    validateForm(event);
});
document.querySelector("#password").addEventListener("change", checkPassword);

async function displayCity() {
    let zipCode = document.querySelector("#zip").value;
    
    let url =`https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    document.querySelector("#city").innerHTML = data.city;
    document.querySelector("#latitude").innerHTML = data.latitude;
    document.querySelector("#longitude").innerHTML = data.longitude;
}

async function displayCounties() {
    let state = document.querySelector("#state").value;
    let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;
    let response = await fetch(url);
    let data = await response.json();
    let countyList = document.querySelector("#county");
    countyList.innerHTML = "<option> Select County </option>"
    for(let i=0; i < data.length; i++){
        countyList.innerHTML += `<option> ${data[i].county} </option>`;
    }
}

async function checkUsername() {
    let username = document.querySelector("#username").value;
    let url = `https://csumb.space/api/usernamesAPI.php?username=${username}`;
    let response = await fetch(url);
    let data = await response.json();
    let usernameError = document.querySelector("#usernameError")
    if(data.available){
        usernameError.innerHTML = "Username available!";
        username.style.color = "green";
    }
    else {
        usernameError.innerHTML = "Username taken";
        username.style.color = "red";
    }
}

async function checkPassword() {
    let password = document.querySelector("#password").value;
    let url = `https://csumb.space/api/suggestedPassword.php?length=6`;
    let response = await fetch(url);
    let data = await response.json();
    let suggestedPassword = document.querySelector("#suggestedPwd")
}

function validateForm(e){
    let isValid = true;
    let username = document.querySelector("#username").value;
    if (username.length == 0){
        document.querySelector("#usernameError").innerHTML = "Username Required!";
        isValid = false;
    }
    if (password.length)

    if(!isValid) {
        e.preventDefault();
    }
}