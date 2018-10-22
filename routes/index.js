var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
	res.json({"status": "ok", "message": "you are calling this endpoint as GET."})
})

router.post('/', (req, res, next) => {
	res.json({"status": "ok", "message": "you are calling this endpoint as POST."})
})

module.exports = router
