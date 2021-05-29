const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => res.render('brands', {brandid : req.params.id}));

module.exports = router;