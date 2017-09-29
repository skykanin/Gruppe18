let concertlist = document.getElementById('concertlist')
let query = 'SELECT * FROM `FESTIVAL`'

main.SQLquery(query, (response) => {
    response.forEach((x) => {
        let li = document.createElement('LI')
        li.innerHTML = x.name
        concertlist.appendChild(li)
    })
})