/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    kar = require('./routes/kar'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}


// app.get('/', routes.index);
app.get('/users', user.list);

app.get('/queue', kar.queue); // first is currently playing
app.get('/done', kar.done); //last is most recent
app.get('/thumbs', kar.thumbs);
app.get('/finish', kar.finishCurrent);
app.get('/request/:name/:artist/:song', kar.request)
app.get('/requestfront/:name/:artist/:song', kar.requestfront);


http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});