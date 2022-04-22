const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
   res.send('hello express js, hello jackson')
});
const users =[
    {id:1, name: "newton", email: "newton@gmail.com", phone: '01557777774'},
    {id:2, name: "sumon", email: "newton3@gmail.com", phone: '01557773474'},
    {id:3, name: "jasckson", email : "newton5@gmail.com", phone: '01557777654'},
    {id:4, name: "vubon", email: "newton@gmail.com", phone: '01557787674'},
 
]
app.get('/users', (req, res) =>{
    res.send(users);
  
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})
app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user)
})
app.listen(port,()=>{
    console.log('listening to port', port);
});
