const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.get('/', brandController.getAll)
router.post('/', checkRole('ADMIN'), brandController.create)

module.exports = router