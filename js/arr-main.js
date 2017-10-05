

festivalrows = Array.from(document.getElementsByClassName('festivalrows'))
festivalrows.forEach((x) => {
    x.onclick = () => {
        let concerts = x.nextElementSibling
        if(concerts.style.display == 'table-row') {
            concerts.style.display = 'none'
        }
        else {
            concerts.style.display = 'table-row'
        }
    }
})

concertrow = Array.from(document.getElementsByClassName('concertrow'))
techtable = document.getElementById('techtable')

concertrow.forEach((x) => {

    x.onclick = () => {
        techtable.innerHTML = ''
        tr = document.createElement('TR')
        navn = document.createElement('TH')
        tlf = document.createElement('TH')
        email = document.createElement('TH')
        navn.innerHTML = 'Navn'
        tlf.innerHTML = 'Tlf'
        email.innerHTML = 'Email'
        tr.appendChild(navn)
        tr.appendChild(tlf)
        tr.appendChild(email)
        techtable.appendChild(tr)
        id = x.querySelector('.concertids').innerHTML
        concert = locals.concerts.getConcertByConcertID(id)
        concert.getTechs().forEach((y) => {
            tr = document.createElement('TR')
            navn = document.createElement('TD')
            tlf = document.createElement('TD')
            email = document.createElement('TD')
            navn.innerHTML = y.navn
            tlf.innerHTML = y.tlf
            email.innerHTML = y.email
            tr.appendChild(navn)
            tr.appendChild(tlf)
            tr.appendChild(email)
            techtable.appendChild(tr)
        })
    }
})