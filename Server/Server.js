var http = require("http");
var url = require("url");
var db = require("mysql");

var Concert_technical = "SELECT u.name AS name, u.username AS username "+
"FROM USER AS u INNER JOIN CONCERT_TECHNICAL AS ct  ON u.username = ct.username "+
"INNER JOIN CONCERT AS c  ON c.ID = ct.CID  WHERE c.ID = ?";

var con = db.createConnection({
  host: "mysql.stud.ntnu.no",
  user: "andrris_gruppe18",
  password: [insert password here],
  database: "andrris_gruppe18"
});

con.connect(function(err){
if (err) throw err;
console.log("Connected!");
});

http.createServer(function (req,res){
  if(req.method == "GET"){
    let query = url.parse(req.url, true).query;
    let path = url.parse(req.url, true).pathname;
    if(path == "/concert/tech/"){
      //console.log(query);
      con.query(Concert_technical, query.id, function(err, result, fields){
        if(err) throw err;  //Ocationally claims errors in correctly functioning SQL code (returns desired result but throws error near ?)
        //TODO find out why
        //console.log(result);
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(JSON.stringify(result));
      });
    //console.log(path.pathname);
    //console.log(path.query);
    }
  }
}).listen(8000);
