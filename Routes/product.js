const express = require('express');
const router = express.Router();

// http://localhost:5000/api/product
router.get('/product' , (req , res) => {
    res.send('Hello Product')
});

router.post('/product' , (req , res) => {
    res.send('eieiei')
})

router.put('/product' , (req , res) => {
    res.send('55555')
})


router.delete('/product' , (req , res) => {
    res.json({name : 'tam' , id : 555})
})

module.exports = router;