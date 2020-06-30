const {Router} = require('express');
const router = Router();
const {renderIndex,renderHistoria,renderEtiquetas}= require('../controllers/controler')


router.get('/', renderIndex)

router.get('/historia',renderHistoria)

router.get('/etiquetas',renderEtiquetas)

module.exports = router