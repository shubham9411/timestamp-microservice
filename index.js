var express = require('express')
var path = require('path')
var app = express()
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
app.listen(8100)
app.get('/:id',function(req,res){
	result = {}
	date = req.params.id
	var d = new Date(isNaN(date) ? date : Number(date+'000'));
	month = monthNames[d.getMonth()]
	year = d.getFullYear()
	day = d.getDate()
	unixtime = parseInt(d.getTime()/1000)
	result['unix'] = unixtime
	result['natural'] = month == null ? null : month + ' ' + day + ', ' + year
	res.send(result)
})
app.use(express.static(process.argv[3]||path.join(__dirname)));
