const form = document.getElementById('contact-form');
const submit = document.getElementById('submit');
var fname = document.getElementById('fname');
var email = document.getElementById('email');
var message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let formdata = {
        name: fname.value,
        email: email.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contact');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success')
        {
            alert('Email sent');
            fname.value = "";
            email.value = "";
            message.value = ""; 
        }
        else
            alert('Something went wrong');
    }

    xhr.send(JSON.stringify(formdata));
})