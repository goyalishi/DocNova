// express server initialization
const express = require('express');
const app = express();
const port = 3000;  
app.listen(port, () => {    
    console.log(`Server running on port ${port}`);
}); 
//to display somtthing on home page
app.get('/home', (req, res) => {
    res.send('Welcome to Express');
});



