const locationsRow = document.querySelector('.locations-row');
const covidCardBody = document.querySelector('#covid-card-body');

// setup location cards
const setupLocations = (data) => {

    let html = '';
    data.forEach(doc => {
        //console.log(doc.data());
        const location = doc.data();
        
        const card = `
            <div class="card">
                <div class="card-body">

                    <div class="row">
                        <div class="col rounded text-center">
                        <small>Latitude</small>
                        <p>${location.latitude}</p>
                        </div>
                        <div class="col rounded text-center">
                        <small>Longitde</small>
                        <p>${location.longitude}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        html += card;
    });

    locationsRow.innerHTML = html;
}


const setupCovidData = (data) => {

    let html ='';

    console.log("setupCovid", data);
        
    let card = `
            <div class="card">
                <div class="card-body">
                <h5>Active</h5>
                <p>${data.Active}</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                <h5>Confirmed</h5>
                <p>${data.Confirmed}</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                <h5>Deaths</h5>
                <p>${data.Deaths}</p>
                </div>
            </div>
        `;

        html += card;
        
    covidCardBody.innerHTML = html;
}