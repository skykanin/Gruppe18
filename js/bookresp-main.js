let searchbar = document.getElementsByName('search')[0]
let searchresults = document.getElementById('searchresults')
let redirectButton = document.getElementById('redirectButton')



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

    bandrows = []
    for (let i = 0; i < results.length; i++) {
        bandrows.push(document.createElement('tr'))
        bandrows[i].className = 'entry'
        td1 = document.createElement('td')
        td2 = document.createElement('td')
        td3 = document.createElement('td')
        td4 = document.createElement('td')
        td5 = document.createElement('td')

        td1.innerHTML = results[i].name
        td2.innerHTML = results[i].manager
        td3.innerHTML = results[i].genre
        td4.innerHTML = results[i].description
        td5.innerHTML = results[i].streams

        bandrows[i].appendChild(td1)
        bandrows[i].appendChild(td2)
        bandrows[i].appendChild(td3)
        bandrows[i].appendChild(td4)
        bandrows[i].appendChild(td5)

        searchresults.appendChild(bandrows[i])

        bandrows[i].onclick = () => {
            let tr2 = document.createElement('tr')
            let td = document.createElement('td')
            let date = document.createElement('input')
            let price = document.createElement('input')
            let comment = document.createElement('textarea')
            let submit = document.createElement('button')
            td.colSpan = '5'
            date.type = 'date'
            price.type = 'text'
            price.placeholder = 'Price'
            comment.placeholder = 'Comments'
            submit.innerHTML = 'Submit offer'

            td.appendChild(date)
            td.appendChild(price)
            td.appendChild(comment)
            td.appendChild(submit)
            tr2.appendChild(td)
            submit.onclick = () => {
                datev = date.value
                pricev = price.value
                commentv = comment.value

                let query = `
                INSERT INTO OFFER (BID, performance_date, price, comment)
                VALUES (${results[i].id}, ${datev}, ${pricev}, ${commentv})
                `
                main.SQLquery(query, (rows, fields) => {
                    alert('Offer submitted')
                    tr2.remove()
                })
            }
            bandrows[i].style.backgroundColor = 'red'
            bandrows[i].parentNode.insertBefore(tr2, bandrows[i].nextSibling)

        }

        concerts = main.locals.concerts.getConcertsByBand(results[i].name)
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
    }


    // let i = 0
    // Array.prototype.forEach.call(entries, x => {
    //     x.onclick = () => {
    //         let tr2 = document.createElement('tr')
    //         let td = document.createElement('td')
    //         let date = document.createElement('input')
    //         let price = document.createElement('input')
    //         let comment = document.createElement('textarea')
    //         let submit = document.createElement('button')
    //         td.colSpan = '5'
    //         date.type = 'date'
    //         price.type = 'text'
    //         price.placeholder = 'Price'
    //         comment.placeholder = 'Comments'
    //         submit.innerHTML = 'Submit offer'
    //
    //         td.appendChild(date)
    //         td.appendChild(price)
    //         td.appendChild(comment)
    //         td.appendChild(submit)
    //         tr2.appendChild(td)
    //
    //         submit.onclick = () => {
    //             datev = date.value
    //             pricev = price.value
    //             commentv = comment.value
    //
    //             let query = `
    //             INSERT INTO OFFER (BID, performance_date, price, comment)
    //             VALUES (${results[i].id}, ${datev}, ${pricev}, ${commentv})
    //             `
    //             main.SQLquery(query, (rows, fields) => {
    //                 alert('Offer submitted')
    //                 x.remove()
    //             })
    //         }
    //         x.style.backgroundColor = 'red'
    //         x.parentNode.insertBefore(tr2, x.nextSibling)
    //         i++
    //     }
    // })
})

redirectButton.onclick = () => {
    main.loadPage('bookresp-needs.pug')
}