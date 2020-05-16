//console.log(db);
db.collection('locations').get()
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err))