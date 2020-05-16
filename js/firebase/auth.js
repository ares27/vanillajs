const signInForm = $('#signin-form')
const email = $('#email-input')
const password = $('#password-input')
const submitLocationBtn = $('#submit-location-btn')
// let lat = $('#p-lat')
// let lon = $('#p-lon')

// Listen for auth state
auth.onAuthStateChanged(user => {
    //console.log(user);

    if(user) {
        console.log("User logged in: ", user);

        // greet Avatar
        $(".hi-avatar").text(user.email);

        // show nav links
        setupUI(user);

        // Get data from firebase
        // db.collection('locations').get().then(snapshot => { 
        //     //console.log(snapshot.docs);
        //     setupLocations(snapshot.docs);
        // });

        // Get data, with snapshot promise
        db.collection('locations').onSnapshot(snapshot => { 
            //console.log(snapshot.docs);
            setupLocations(snapshot.docs);
        });


        


    } else {
        console.log("User logged out: ", user);
        
        setupUI();
        
        // show user locations
        setupLocations([]);
      
    }
});




// Sign-In
signInForm.on('submit', (e) => {
    
    e.preventDefault();
    //console.log(e);

    // Get User info
    let obj = {
        email: email.val(),
        password: password.val()    
    }
    
    
    console.log(obj.email, obj.password);

    // login user 
    auth.signInWithEmailAndPassword(obj.email, obj.password)
        .then(cred => {
            console.log(cred.user);  
            
            // set localStorage
            localStorage.setItem('email', cred.user.email);

            // show NavBar
            $(".logged-in").css("display", "inline");

            //loggedInNavItems.style.display = 'inline';
                        
            //reset input fields

            // goto when logged in
            window.location.href = "./routes/home.html";

    }) 

})


// Sign-Out
const logout = $('.signout-link');
logout.on('click', () => {

    // clear localStorage
    localStorage.removeItem('email');

    auth.signOut()
        .then(res => {
            console.log("User logged out: ", res);
            
            // navigate to index page
            window.location.href = "../index.html";
        })
})

 



// capture location
submitLocationBtn.on('click', () => {

   
    // add record to firebase db
    db.collection('locations').add({
        latitude: lat.text(),
        longitude: lon.text()
    })
    .then((res) => {

        console.log(res);
        //reset values
        lat.text();
        lon.text();
    })

})



