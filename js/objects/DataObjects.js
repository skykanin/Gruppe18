const path = require('path')
const dateFormat = require('dateformat');
const main = require(path.resolve('./main.js'))

//////////// class declerations

class Festival {
    constructor(id, navn, start, slutt, concerts) {
        this.id = id
        this.navn = navn
        this.start = start
        this.slutt = slutt
        this.concerts = concerts
    }
}

class Concert {
    constructor(id, band, scene, start, duration, bookingansvarlig, audience, festival) {
        this.id = id
        this.band = band
        this.scene = scene
        this.start = start
        this.duration = duration
        this.bookingansvarlig = bookingansvarlig
        this.audience = audience
        this.festival = festival
        this.techs = []
    }
    getTechs() {
        return this.techs
    }
    addTech(user) {
        this.techs.push(user)
    }
}

class Concerts {
    constructor() {
        this.concerts = []
    }
    getConcertsByFestivalID(id) {
        let matching_concerts = []
        this.concerts.forEach((x) => {
            if (x.festival == id) {
                matching_concerts.push(x)
            }
        })
        return matching_concerts
    }
    addConcert(concert) {
        this.concerts.push(concert)
    }
    getConcertByConcertID(id) {
        for (var i = 0; i < this.concerts.length; i++) {
            if (this.concerts[i].id == id) {
                return this.concerts[i]
            }
        }
    }
}

class User {
    constructor(username, navn, tlf, email, usertype) {
        this.username = username
        this.navn = navn
        this.tlf = tlf
        this.email = email
        this.usertype = usertype
        this.concerts = []
    }
    addConcert(concert) {
        this.concerts.push(concert)
    }
    getConcerts() {
        return this.concerts
    }
}

class Users {
    constructor() {
        this.users = []
    }
    addUser(user) {
        this.users.push(user)
    }
    getUserByUsername(username) {
        for (var i = 0; i < this.users.length; i++) {
            if (username == this.users[i].username) {
                return this.users[i]
            }
        }
    }
    getUsers() {
        return this.users
    }
    getTechs() {
        let techs = []
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].usertype == 'Tekniker') {
                techs.push(this.users[i])
            }
        }
        return techs
    }
}

//////////// loads/reloads the objects

exports.festivals = []
exports.concerts = new Concerts()
exports.users = new Users()

usersloaded = false
concertsloaded = false


exports.reloadConcerts = () => {
    console.log('loading concerts')
    let concertquery = 'SELECT CONCERT.ID, b.name band, s.name scene, CONCERT.start, CONCERT.festival, p.name ' +
        'booking_responsible, CONCERT.audience_num, CONCERT.duration_hours FROM ' +
        '`CONCERT` LEFT JOIN USER p ON (CONCERT.booking_responsible=p.username) ' +
        'LEFT JOIN BAND b ON (CONCERT.band=b.ID) LEFT JOIN SCENE s ON (CONCERT.scene=s.ID) ';
    main.SQLquery(concertquery, (rows, fields) => {
        rows.forEach((x) => {
            let start = dateFormat(x.start, 'dd, mmm, hh:mm')
            let concert = new Concert(x.ID, x.band, x.scene, start, x.duration_hours,
                x.booking_responsible, x.audience_num, x.festival)
            exports.concerts.addConcert(concert)
        })
        concertsloaded = true
        exports.reloadConcert_technical()
    })
}

exports.reloadFestivals = () => {
    let festivalquery = 'SELECT * FROM `FESTIVAL`'
    main.SQLquery(festivalquery, (rows, fields) => {
        rows.forEach((x) => {
            let start = 'Fra ' + dateFormat(x.start_time, 'dd-mm-yyyy')
            let slutt = 'Til ' + dateFormat(x.end_time, 'dd-mm-yyyy')
            let festival = new Festival(x.ID, x.name, start, slutt,
                exports.concerts.getConcertsByFestivalID(x.ID))
            exports.festivals.push(festival)
        })
    })
}

exports.reloadUsers = () => {
    let festivalquery = 'SELECT * FROM `USER`'
    main.SQLquery(festivalquery, (rows, fields) => {
        rows.forEach((x) => {
            user = new User(x.username, x.name, x.tlf, x.email, x.usertype)
            exports.users.addUser(user)
        })
        usersloaded = true
        exports.reloadConcert_technical()
    })
}

exports.reloadConcert_technical = () => {
    if (usersloaded && concertsloaded) {
        let festivalquery = 'SELECT * FROM `CONCERT_TECHNICAL`'
        main.SQLquery(festivalquery, (rows, fields) => {
            rows.forEach((x) => {
                user = exports.users.getUserByUsername(x.username)
                concert = exports.concerts.getConcertByConcertID(x.CID)
                user.addConcert(concert)
                concert.addTech(user)
            })
        })
    }
}