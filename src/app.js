const express = require('express');
const cors = require('cors');
const db = require('./utils/databases')
const port = 8000
const todosRoutes = require('./routes/todos.routes');

db.authenticate()
.then(() => {
    console.log('ok');
})
.catch(err => {
    console.log('error: ' + err);
});

db.sync()
.then(() => {
 console.log('Base de datos sincronizada');
})
.catch(err => {
    console.log('error: ' + err);
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(todosRoutes);

app.get('/', (req,res)=>{
    res.send()
})

app.listen(port, () =>{
   console.log('listening on port '+port);
})