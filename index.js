const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require( 'cookie-session' );
const bodyParser = require( 'body-parser' );
const passport = require('passport');
const keys = require( './config/keys' );
const cors = require( 'cors' )
require( './models/User' );
require('./models/Air')
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser:true});

const app = express();

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use( passport.session() );
app.use(cors())

require( './routes/authRoutes' )(app)
require( './routes/airRoutes' )( app )
// 위의 명령문은 되는 데 왜 다음을 하면 airdata route가 안되는지???
// const airRoutes = require('./routes/airRoutes')
// app.use( airRoutes );

const PORT = process.env.PORT || 5000;
app.listen(PORT);
