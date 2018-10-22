var express = require('express')
var router = express.Router()
var os = require('os')

router.get('/', (req, res, next) => {
	var data = {"cpus": os.cpus(), "loadavg": os.loadavg(), "totalmem": os.totalmem(), "freemem": os.freemem()}
	res.json(data)
})

module.exports = router
