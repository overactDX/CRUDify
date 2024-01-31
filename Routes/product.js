const express = require('express');
const router = express.Router();

// http://localhost:5000/api/product
router.get('/product' , (req , res) => {
    res.send('Hello Product')
});

router.get('/product/:id' , (req , res) => {
    res.send('Hello 1 Product')
});

router.post('/product' , (req , res) => {
    res.send('eieiei')
})

router.put('/product/:id' , (req , res) => {
    res.send('55555 id 1')
})

router.delete('/product/:id' , (req , res) => {
    res.json({name : 'tam' , id : 555})
})

module.exports = router;