var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
	res.status(400).json({"status": "error", "error": "GET not allowed"})
})

router.post('/', (req, res, next) => {
	var name = req.body.name
	if(!name) {
		res.status(400).json({"status": "error", "error": "name not specified"})
	} else {
		res.json({"status": "ok", "message": `hello, ${name}!`})
	}
})

module.exports = router
