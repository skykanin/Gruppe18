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
    constructor(searchBar=document.getElementById('searchBar'), tableElement=document.getElementById('searchResults'), displayTable=document.getElementById('display')) {
        super();
        this.searchBar = searchBar;
        this.table = tableElement;
        this.displayTable = displayTable;
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
            this.bandNeeds.forEach((band) => {
                if(band.BID == results[i].id && band.BID != undefined && results[i].id != undefined) {
                    description.innerHTML = band.description;
                }
            });
            row.appendChild(name);
            row.appendChild(manager);
            row.appendChild(genre);
            row.appendChild(description);
            this.table.appendChild(row);
        }
        this.addTableRowEventListeners();
    }

    addTableRowEventListeners() {
        let rows = this.table.getElementsByTagName('tr');
        
        for(let i=1; i < rows.length; i++) {
            rows[i].onclick = () => {
                let selectedRow = document.createElement('tr');
                selectedRow.innerHTML = rows[i].innerHTML;
                this.selectedRow = selectedRow;
                this.displaySelectedBand();
            }
        }
        
    }

    displaySelectedBand() {
        if(this.displayTable.rows[1] == undefined) {
            this.displayTable.appendChild(this.selectedRow);

        } else if(this.selectedRow.cells[0].innerHTML !== this.displayTable.rows[1].cells[0].innerHTML) {
            this.displayTable.removeChild(this.displayTable.children[1]);
            this.displayTable.appendChild(this.selectedRow);
        }
    }
}

let x = new DisplayBands();