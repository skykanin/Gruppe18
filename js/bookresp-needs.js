class BandNeedsSearch {

    constructor(){
        this.backButton = document.getElementById('backButton');
        this.searchBar = document.getElementById('search');
        this.table = document.getElementById('searchresults')
        this.connection = main.connection;
        this.dbResults;
        this.addEventListeners();
        this.getDataFromTable();
    }

    addEventListeners() {
        this.backButton.onclick = () => {
            main.loadPage('bookresp-main.pug')
        }

        this.searchBar.oninput = () => {
            this.displaySearchResult();
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
                this.displayBandsWithNeeds(results);
                this.dbResults = results;
            }
        });
    }

    displaySearchResult() {
        let searchResults = this.getBandNeedsBySearch(this.searchBar.value, this.dbResults);

        while (this.table.children.length > 1) {
            this.table.removeChild(this.table.lastChild);
        }

        searchResults.forEach((element) => {
            let tr = document.createElement('tr');
            let bandName = document.createElement('td');
            let bandDescription = document.createElement('td');

            bandName.innerHTML = element.name;
            bandDescription.innerHTML = element.description;

            tr.appendChild(bandName);
            tr.appendChild(bandDescription);
            this.table.appendChild(tr);
        })
    }

    getBandNeedsBySearch(search) {
        let resultsToDisplay = []
        for (var i = 0; i < this.dbResults.length; i++) {
            if(this.dbResults[i].name.toUpperCase().includes(search.toUpperCase()) || search == ""){
                resultsToDisplay.push(this.dbResults[i]);
            }
        }
        return resultsToDisplay
    }
}

let bandNeedsSearch = new BandNeedsSearch();