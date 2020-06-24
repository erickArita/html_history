const {Router} = require('express');
const router = Router();
const {renderIndex,renderHistoria}= require('../controllers/controler')


router.get('/', renderIndex)

router.get('/historia',renderHistoria)

module.exports = router