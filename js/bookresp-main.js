let searchbar = document.getElementsByName('search')[0]
let searchresults = document.getElementById('searchresults')

searchbar.addEventListener('input', () => {
    results = main.locals.bands.getBandsBySearch(searchbar.value)
    searchresults.innerHTML = ''
    results.forEach((x) => {
        li = document.createElement('LI')
        li.innerHTML = x.name
        searchresults.appendChild(li)
    })
})
