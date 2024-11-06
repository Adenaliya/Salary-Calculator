const express = require( 'express' );
const app = express();
// uses
// to serve index.html etc
app.use( express.static( 'server/public' ) );
// to make sure POSTs work
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
// globals
const port = 5001;


// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
})
app.get( '/employee', (req, res)=>{
    console.log( '/employee GET' );
    res.send( employee );
});