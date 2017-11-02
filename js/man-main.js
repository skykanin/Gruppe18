class Manager {

}

class Search {
    constructor() {
        this.connection = main.connection;
        this.bandNeeds = [];
        this.getBandNeedsFromDatabase();
    }

    getSearchBandResults(searchValue) {
        return main.locals.bands.getBandsBySearch(searchValue);
    }

    getBandNeedsFromDatabase(queryString='SELECT `BID`, NEEDS.description FROM `NEEDS` WHERE 1') {
        this.connection.query(queryString, (error, results) => {
            if(error) {
                throw error;
            } else {
                this.bandNeeds = results;
                this.displayBands();
            }
        });
    }
}

class DisplayBands extends Search {
    constructor(searchBar=document.getElementById('searchBar'), tableElement=document.getElementById('searchResults')) {
        super();
        this.searchBar = searchBar;
        this.table = tableElement;
        this.setEventListeners();
    }

    setEventListeners() {
        this.searchBar.oninput = () => {
            this.displayBands();
        }
    }

    displayBands() {
        while (this.table.children.length > 1) {
            this.table.removeChild(this.table.lastChild);
        }
        console.log(main.locals.bands);
        let results = this.getSearchBandResults(this.searchBar.value);
        for(let i=0; i < results.length; i++) {
            let row = document.createElement('tr');
            let name = document.createElement('td');
            name.innerHTML = results[i].name;
            let manager = document.createElement('td');
            manager.innerHTML = results[i].manager;
            let genre = document.createElement('td');
            genre.innerHTML = results[i].genre;
            let description = document.createElement('td');
            console.log(this.bandNeeds);
            this.bandNeeds.forEach((band) => {
                console.log("needs", band.BID);
                console.log("bands", results[i]);
                if(band.bid == results[i].id && band.BID != undefined && results[i].id != undefined) {
                    description.innerHTML = band.description;
                    return;
                }
            });

            row.appendChild(name);
            row.appendChild(manager);
            row.appendChild(genre);
            row.appendChild(description);
            this.table.appendChild(row);
        }
    }
}

let x = new DisplayBands();