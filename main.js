


const signupForm = document.querySelector('#signup-form');


signupForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    console.log(signupEmail,signupPassword)

  /*  auth 
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential =>{
            console.log('sing up')

        })
        */
})



