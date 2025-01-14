// express server initialization

const express = require('express');
const app = express();
const port = 3000; 
const cors=require('cors');

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'], 
    credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(port, () => {    
    console.log(`Server running on port ${port}`);
}); 
//to display something on home page
app.get('/', (req, res) => {
    res.send('Welcome to Express');
});

app.get('/api/test', (req, res) => {
    res.json({ success: true, message: 'Frontend and backend are connected!' });
  });



