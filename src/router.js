const {Router} = require('express')
const router = Router()
const cadastroController = require('./controllers/cadastro');

router.get('/cadastro', cadastroController.get)
router.post('/cadastro', cadastroController.store)

module.exports = router