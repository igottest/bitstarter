var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var text = fs.readFileSync('index.html','utf8')

console.log (text)

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
