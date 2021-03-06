const express = require( 'express' );
//const cors = require( 'cors' );
const mongoose = require( 'mongoose' );
const routes = require( './routes' );

const app = express();

// copied from cloud.mongodb.com cluster configuration
mongoose.connect( 'mongodb+srv://aula:aula@aula-7h2ko.mongodb.net/aula?retryWrites=true&w=majority'
        , {
            useNewUrlParser: true
            , useUnifiedTopology: true
        } );

app.use( express.json() );
app.use( routes );
//app.use( cors() );/* { origin: 'http://localhost:3000' } */

// default error handler
// TODO:  find out how to get the actual exception msg
//app.use( function( err, request, response, next ) {
//    console.log( 'error', err );
//    return response.json( {
//        error:  err.type
//        , statusCode: err.statusCode
//        , status: err.status
//    } );
//} );

//www.omnistack.com/users
//app.get( '/users', () => {} );

// Parameter types:
// Query:  request.query ( url = ...?search=value )
// Route:  request.params ( route= /users/:id )
// Body:   request.body ( needs app.use(express.json()); )

// localhost:3333

app.listen( 3333 );

