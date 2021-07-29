const express = require('express');
const app = express();
const PORT = 8008;

app.use(express.json());

app.listen(
    PORT,
    ()=>console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt', (req, res)=>{
    res.status(200).send({
        tshirt: '👕',
        size:'large'
    })
});

app.get('/skirt', (req, res)=>{
    res.status(200).send({
        skirt: '👗',
        size:'small'
    })
});

app.post('/tshirt/:id', (req,res)=>{
    const { id } = req.params;
    const {logo } = req.body;

    if(!logo){
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});

app.post('/skirt/:id', (req,res)=>{
    const { id } = req.params;
    // const {logo } = req.body;

    // if(!logo){
    //     res.status(418).send({ message: 'We need a logo!' })
    // }

    res.send({
        // tshirt: `👕 with your ${logo} and ID of ${id}`,
        skirt: `👗 with ID number ${id}`,
    });
});