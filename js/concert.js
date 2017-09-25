//dummy data
var date1 = 'date1';
var date2
var stage1 = 'stage1';
var stage2
var genre1= 'genre1';
var genre2
var audience1= 'audience1';
var audience2
var bandid1= 'bandid1';
var bandid2
var bandinfo1= 'bandinfo1';
var bandinfo2
var cost1= 'cost1';
var cost2
var profit1= 'profit1';
var profit2

// 9 points of information. in this order
// Band Name,Band Info,Date,Stage,Genre,Audience,Cost,Profit

//get concerts
var concert1 =[date1,stage1,genre1,audience1,bandid1,bandinfo1,cost1,profit1]
var concert2 =['test','dummy']
var concerts=[concert1,concert2];

//generates table with consert information
var table = document.getElementById('concertTable');
for (var i=0; i<concerts.length; i++){
  var tr = document.createElement('tr');
  table.appendChild(tr);
  for (var j=0;j<9;j++) {
    var td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML=td.innerHTML+concerts[i][j];
  }
}
