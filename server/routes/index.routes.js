const express = require('express');
const peopleApiRouter = require('./api/people.routes');

const router = express.Router();

router.use('/api/people', peopleApiRouter);

module.exports = router;
