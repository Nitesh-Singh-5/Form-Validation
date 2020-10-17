console.log('hello');

const name = document.getElementById('name');
const email = document.getElementById("email");
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();


name.addEventListener('blur', () => {
    console.log('name is blured');
    //validate name here

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validUser=true;
    } else {
        console.log("your name is not valid")
        name.classList.add('is-invalid')
    }
})

email.addEventListener('blur', () => {
    console.log('email is blured');
    //validate email here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail= true;
    } else {
        console.log("your email is not valid")
        email.classList.add('is-invalid');
        validEmail= false;
    }
})


phone.addEventListener('blur', () => {
    console.log('phone is blured');
    //validate phone here

    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone=true;
    } else {
        console.log("your phone is not valid")
        phone.classList.add('is-invalid');
        validPhone=false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    let failure = document.getElementById('failure');
    e.preventDefault();
    console.log("clicked in");
    // submit your form here 
    if (validEmail && validPhone && validUser) {
        console.log("everything is valid. submitting the form");

        let success = document.getElementById('success');
        success.classList.add('show');
        //$('#failure').alert('close')
        $('#failure').hide();
        $('#success').show();

    } else {
        console.log(" everything is not valid");
            
        failure.classList.add('show');
        // success.classList.remove('show')
        // $('#success').alert('close')
        $('#success').hide();
        $('#failure').show();
    }
})