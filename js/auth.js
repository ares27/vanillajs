// const loginBtn = document.querySelector('#login-btn');
// let spinner = document.querySelector('.loading-spinner');

var modal = $("#modal-login");


// Listen for Auth changes / Keep track for logged user
auth.onAuthStateChanged(user => {
   
    if(user) {
        console.log("User logged in: ", user);

        // Get data from firebase db
        db.collection('locations').get().then(res => {
            console.log(res.docs);
            setupLocationsList(res.docs);
        });

        setupUI(user);

    } else {
        console.log("User logged out: ", user);
        
        setupUI();
        setupLocationsList([]);
      
    }
})


// Sign-up
const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', (e) => {
    
    e.preventDefault();



    // Get user input
    const email = signUpForm['email-input'].value;
    const password = signUpForm['password-input'].value;

    console.log(email, password);

    // sign-up user
     auth.createUserWithEmailAndPassword(email, password)
        .then(creds => {
             console.log(creds);

             //success alert

            // reset input fields

             //close modal
            

    })


        
})


// Sign-In
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    
    e.preventDefault();
    //console.log(e);

    // Get User info
    let email = loginForm['login-email'].value;
    let password = loginForm['login-password'].value;
    
    console.log(email, password);

    // login user 
    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            console.log(cred.user);  
            
            //reset input fields
            loginForm['login-email'].value = '';
            loginForm['login-password'].value = '';

            location.reload();

            // modal.style.display = "none";
            
            // hide button and navigate back to page
    }) 
  

})


// Logout
const logout = document.querySelector('#logout-link');
logout.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut()
        .then(res => {
            console.log("User logged out: ", res);
        })
})