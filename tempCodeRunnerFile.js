ser');
var logger = require('morgan');
var session = require("express-session");
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  resave: false, //agr session ki value change na huyi ho to dobara save na kre
  saveUninitialized: false,   //jis data ko diya hi nhi gya faltu ka data
  secret: "holabhaiilog"  //iske basis pr data encrypt kiya jayega
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
