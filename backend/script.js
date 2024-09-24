const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('I can do this!')
})


app.listen(3001, () => {
  console.log(`Server is running on port 3000`);
});
