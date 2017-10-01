const path = require('path')
const dateFormat = require('dateformat');
const main = require(path.resolve('./main.js'))

exports.festivals = []

let festivalquery = 'SELECT * FROM `FESTIVAL`'

exports.reloadFestivals = () => {
    main.SQLquery(festivalquery, (rows, fields) => {
        rows.forEach((x) => {
            let festival = {}
            festival.id = x.ID
            festival.navn = x.name
            festival.start = 'Fra ' + dateFormat(x.start_time, 'dd-mm-yyyy')
            festival.slutt = 'Til ' + dateFormat(x.end_time, 'dd-mm-yyyy')
            festival.concerts = loadConcerts(festival.id)
            exports.festivals.push(festival)
        })
    })
}

loadConcerts = (id) => {
    let concertquery = 'SELECT b.name band, s.name scene, CONCERT.start, p.name ' +
        'booking_responsible, CONCERT.audience_num, CONCERT.duration_hours FROM ' +
        '`CONCERT` LEFT JOIN USER p ON (CONCERT.booking_responsible=p.username) ' +
        'LEFT JOIN BAND b ON (CONCERT.band=b.ID) LEFT JOIN SCENE s ON (CONCERT.scene=s.ID) ' +
        'WHERE festival = 1'

    let concerts = []

    main.SQLquery(concertquery, (rows, fields) => {
        rows.forEach((x) => {
            let concert = {}
            concert.band = x.band
            concert.scene = x.scene
            concert.start = dateFormat(x.start, 'dd, mmm, hh:mm')
            concert.duration = x.duration_hours
            concert.bookingansvarlig = x.booking_responsible
            concert.audience = x.audience_num
            concerts.push(concert)
        })
    })
    return concerts
}

