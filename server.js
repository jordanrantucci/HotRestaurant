//DEPENDENCIES
const express = require('express')
const path = require('path')

//set up express app
const app = express()
const PORT = process.env.PORT || 3000

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//reservation info (DATA)
const reservationInfo = [
    {
        name:'',
        phoneNumber:'',
        email:'',
        uniqueID:'',
    }
]

const waitlistInfo = [
    {
        name:'',
        phoneNumber:'',
        email:'',
        uniqueID:''
    }
]

//ROUTES
//basic route that sends the user first to the AJAX page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/Reservation', function(req, res) {
    res.sendFile(path.join(__dirname, 'Reservation.html'))
})

app.get('/Table', function(req, res) {
    res.sendFile(path.join(__dirname, 'Table.html'))
})

//Displays all reservations with tables
app.get('/api/table', function(req, res) {
    return res.json(reservationInfo)
})

//Displays all waitlisted reservations
app.get('/api/waitlist', function(req, res) {
    return res.json(waitlistInfo)
})

//Make new reservation request - takes in JSON input
app.post('api/table', function(req, res) {
    const newReservation = req.body
    if(reservationInfo.length = 5){
        reservationInfo.push(newReservation)
    }
    else {
        waitlistInfo.push(newReservation)
    }
})

app.listen(PORT, function() {
    console.log('App listening on http://localhost:' + PORT)
})