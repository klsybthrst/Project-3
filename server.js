const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.get( '/api/list', function( req, res ){
  res.send( [ "victor", "leah", "david", "levi", "cecil", "jojoe", "ryan", "shaun"] )
})

// Send every other request to the React app
// Define any API routes before this runs
//  app.get("/login", (req, res) => {
//    res.sendFile(path.join(__dirname, "./client/build/index.html"));
//  });

//  app.get('/login/callback', (res, req) =>{
//    console.log('res: ', res)
//   //  res.sendFile(path.join(__dirname, "./src/client/public/index.html"));
//   res.sendFile(path.join(__dirname, "./src/client/public/index.html"));
// })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
