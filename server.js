const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));
app.use(express.static('./node_modules/angular/'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(app.get('port'), function () {
	console.log('App is running on port', app.get('port'));
});