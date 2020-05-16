//const trackMeBtn = $('#trackme-btn')
const getLocationBtn = $('#get-location-btn')
let lat = $('#p-lat')
let lon = $('#p-lon')

getLocationBtn.on('click', () => {

    getLocation();   

    //center the map here
    //view.center = [-112, 38];


});




let getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);      
        
    } else {
        console.log("Geolocation is not supported by this browser.", e);
    }
}

function showPosition(position) {
    //console.log(position.coords);
   
    // set coords in localStorage
    localStorage.setItem('latitude', (position.coords.latitude).toFixed(7));
    localStorage.setItem('longitude', (position.coords.longitude).toFixed(7));

    // set lat, lon DOM values
    lat.text((position.coords.latitude).toFixed(7));
    lon.text((position.coords.longitude).toFixed(7));   
    
    
}








