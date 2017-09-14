//Ikke gjør endringer i js filen, bare denne!!!
class main {
    constructor(tall, test) {
        this.tall = tall;
        this.test = test;
    }
    getTall() {
        return this.tall;
    }
    getTest() {
        return this.test;
    }
}
var dette = new main(12, "Hello World");
console.log(dette.getTall());
console.log(dette.getTest());
let img=document.getElementsByTagName("img")[0],
    trans=document.getElementById("trans");
trans.onmouseenter=function(){
    img.style.filter="blur(0)";
}
trans.onmouseleave=function(){
    img.style.filter="blur(5px)"
}
