var form = document.getElementById("modall");
var formSubmitButton = document.getElementById("formSubmit");
var clickMeButton = document.getElementById("clickMeButton");

clickMeButton.addEventListener('click', function(){
    console.log("Click me button clicked");
    form.style.display = "flex";
});
// Defining a list for new users:
let userList = [];

var formSubmitButton = document.getElementById("formSubmit");

function submitForm(event){
    event.preventDefault();

    let newUser = {
        firstName: document.getElementById("first-name").value,
        lastName : document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        password : document.getElementById("password").value
    };

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if (response.ok) {
            console.log("User Created Successfully");
        } else {
            console.error('Failed to create user')
        }
    });
}



formSubmitButton.addEventListener('click', submitForm);

//connecttothesocket 
let socket=io();
 socket.on('number', (msg) => { 
console.log('Randomnumber:'+msg);
 });

