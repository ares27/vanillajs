const form = document.getElementById('my-form');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
 

const getLocationBtn = $('#get-location-btn');
const trackLocationBtn = $('#track-location-btn');
trackLocationBtn.hide();


const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const greetUser = document.querySelector('#greet-user');
const spinner = document.querySelector('.loading-spinner');





const setupUI = (user) => {
    if(user) {
        
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none'); 
        greetUser.inner   

    } else {

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block'); 

    }
}



const locationsList = document.querySelector('.my-locations');

// setup list
const setupLocationsList = (data) => {

      let html = '';


      //
      if(data.length) {

        data.forEach(doc => {
            const location = doc.data();
            console.log("location: ", location);
  
          const li = `
              <li class="list-group-item mb-1">
                <h5>Co-ords</h5>  
                <p>${location.latitude} ${location.longitude}</p>
              </li>
          `;
  
          html += li;
  
        });

        locationsList.innerHTML = html;
        
      } else {

        locationsList.innerHTML = '<h5 class="text-center mt-5">Login to view data.</h5>';
      }

}






























// Get user location
getLocationBtn.on('click', (e) => {
    e.preventDefault();
    //console.log("Get Location: ", e);
    
    getLocation();

    setTimeout(()=> {

        // hide loading spinner
        spinner.style.display = 'none';

        // set input to readonly
        $('#my-form input').attr('readonly', true);
        
        // show trackr button
        trackLocationBtn.fadeIn();


    }, 3000)
})


// Track user location
trackLocationBtn.on('click', (e) => {
    e.preventDefault();
    // console.log("Track Location: ", e);
    
    // hide tracker button
    trackLocationBtn.fadeOut();

    // show loading spinner
    spinner.style.display = 'inline-block';


    let coords = {
        latitude: latitude.value,
        longitude: longitude.value
    }

    console.log("Track Location Co-ords: ", coords);

    // Add a new document with a generated id.
    db.collection("locations").add(coords)
    .then(docRef => {
        console.log("Document written with ID: ", docRef.id);

        setTimeout(()=> {

            // hide loading spinner
            spinner.style.display = 'none';

            // alert success to user
            $('.alert-success').fadeIn();
    
        }, 2000)
    })
    .catch(error => {

            //console.error("Error adding document: ", error);

            // hide loading spinner
            spinner.style.display = 'none';

            // alert failure to user
            $('.alert-danger').fadeIn();
    
    });

})



// Geolocation API call
function getLocation() {
    if (navigator.geolocation) {
        
        // hide location button
        getLocationBtn.fadeOut();

        // show loading spinner
        spinner.style.display = 'inline-block';
        
        // Get Position
        navigator.geolocation.getCurrentPosition(showPosition);
        
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {

    //console.log("position: ", position.coords);
    
    setTimeout(()=> {

        latitude.value = position.coords.latitude.toFixed(8);
        longitude.value = position.coords.longitude.toFixed(8);

        // hide loading spinner
        spinner.style.display = 'none';

    }, 3000);  

    
}
