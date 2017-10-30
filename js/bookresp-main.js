let searchbar = document.getElementsByName('search')[0]
let searchresults = document.getElementById('searchresults')

searchbar.addEventListener('input', () => {
    results = main.locals.bands.getBandsBySearch(searchbar.value)
    searchresults.innerHTML = ''
    tr = document.createElement('tr')
    th1 = document.createElement('th')
    th2 = document.createElement('th')
    th3 = document.createElement('th')
    th4 = document.createElement('th')
    th5 = document.createElement('th')

    th1.innerHTML = 'Band'
    th2.innerHTML = 'Manager'
    th3.innerHTML = 'Genre'
    th4.innerHTML = 'Description'
    th5.innerHTML = 'Streams'

    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)

    searchresults.appendChild(tr)

    results.forEach((x) => {
        tr = document.createElement('tr')
        td1 = document.createElement('td')
        td2 = document.createElement('td')
        td3 = document.createElement('td')
        td4 = document.createElement('td')
        td5 = document.createElement('td')

        td1.innerHTML = x.name
        td2.innerHTML = x.manager
        td3.innerHTML = x.genre
        td4.innerHTML = x.description
        td5.innerHTML = x.streams

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        searchresults.appendChild(tr)

        concerts = main.locals.concerts.getConcertsByBand(x.name)
        tr = document.createElement('tr')
        td1 = document.createElement('td')
        ul = document.createElement('ul')
        concerts.forEach(y => {
            li = document.createElement('li')
            li.innerHTML = 'Played ' + y.start + ' on ' + y.scene + ' in front of ' + y.audience + ' people'
            ul.appendChild(li)
        })
        td1.colSpan = 5
        td1.appendChild(ul)
        tr.appendChild(td1)

        searchresults.appendChild(tr)


    })
})
