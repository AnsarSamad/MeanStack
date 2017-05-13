var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var session = require('express-session');
var passport = require('passport');
var flash    = require('connect-flash');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
var app = express();

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader(path.join(__dirname,'db/config.properties'));
var url = properties.get('db.url');

// Use bluebird

mongoose.connect(url);
var db = mongoose.connection;
//mongoose.Promise = bluebird;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connect succesfull");
});

var index = require('./routes/index');
var task = require('./routes/task');
var event = require('./routes/event');
var userstory = require('./routes/user-story');
var feature = require('./routes/feature');


var weather = require('./routes/weather-server');
var validate = require('./routes/validate');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);



app.use(express.static(path.join(__dirname,'client/dist')));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.use(session({ secret: 'ansar123',resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); 


//app.use('/api/validate',validate);



app.use('/',index);
app.use('/api/task',task);
app.use('/api/events',event);
app.use('/api/weather',weather);
app.use('/api/validate',validate);
app.use('/api/userstory',userstory);
app.use('/api/feature',feature);

function redirectInvalidRouters(req,res){
    res.sendFile('index.html',{root:'./client/dist/'})
}
app.use(redirectInvalidRouters);

app.listen(process.env.PORT || 3000 , function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

