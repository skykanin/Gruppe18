class NeedsSearch {

    constructor(){
        this.backButton = document.getElementById('backButton');
        this.searchBar = document.getElementById('search');
        this.table = document.getElementById('searchresults')
        this.connection = main.connection;
        this.addEventListeners();
        this.getDataFromTable();
    }

    addEventListeners() {
        this.backButton.onclick = () => {
            main.loadPage('bookresp-main.pug')
        }

        this.searchBar.oninput = () => {
            this.searchResult();
        }
    }

    displayBandsWithNeeds(data) {
        data.forEach((element) => {
            let tr = document.createElement('tr');
            let bandName = document.createElement('td');
            let bandDescription = document.createElement('td');

            bandName.innerHTML = element.name;
            bandDescription.innerHTML = element.description;

            tr.appendChild(bandName);
            tr.appendChild(bandDescription);
            this.table.appendChild(tr);
        });
    }

    getDataFromTable(queryString='SELECT `ID`, `name`, NEEDS.description, `BID` FROM `BAND`, `NEEDS` WHERE `ID` = `BID`') {
        this.connection.query(queryString, (error, results) => {
            if(error) {
                throw error;
            } else {
                //console.log(results);
                this.displayBandsWithNeeds(results);
            }
        });
    }

    searchResult() {
        //TODO: filter band with needs by search
    }
}

let needsSearch = new NeedsSearch();