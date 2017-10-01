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


