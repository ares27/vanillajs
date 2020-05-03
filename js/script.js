const form = document.getElementById('my-form');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const getLocationBtn = $('#get-location-btn');
const trackLocationBtn = $('#track-location-btn');
trackLocationBtn.hide();


// Get user location
getLocationBtn.on('click', (e) => {
    e.preventDefault();
    console.log("Get Location: ", e);
    getLocation();

    setTimeout(()=> {

        $('input').attr('readonly', true);
        trackLocationBtn.fadeIn();

    }, 3000)
})


// Track user location
trackLocationBtn.on('click', (e) => {
    e.preventDefault();
    // console.log("Track Location: ", e);
    
    
    let coords = {
        latitude: latitude.value,
        longitude: longitude.value
    }

    console.log("Track Location Co-ords: ", coords);

    // Add a new document with a generated id.
    db.collection("locations").add(coords)
    .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
        console.error("Error adding document: ", error);
    });

})





// Geolocation API call
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {

    //console.log("position: ", position.coords);
    latitude.value = position.coords.latitude.toFixed(8);
    longitude.value = position.coords.longitude.toFixed(8);

    getLocationBtn.fadeOut();

}
