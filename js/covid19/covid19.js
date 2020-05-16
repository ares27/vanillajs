const xhttp = new XMLHttpRequest();

// Get COVID19 data
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const result   = JSON.parse(xhttp.responseText);
        const lastItem = result[result.length - 1];
         
        console.log(result);
        console.log(lastItem);

        setupCovidData(lastItem);
    }
};
xhttp.open("GET", "https://api.covid19api.com/dayone/country/south-africa", true);
xhttp.send();