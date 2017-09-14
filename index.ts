class main {
    tall: number;
    test: string;

    constructor(tall: number, test: string){
        this.tall = tall;
        this.test = test;
    }

    getTall(){
        return this.tall;
    }

    getTest(){
        return this.test;
    }
}

var dette = new main(12, "Hello World");
console.log(dette.getTall());
console.log(dette.getTest());