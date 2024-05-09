const express = require('express');
const router = express.Router();

const { apiHealth, apiEvents, apiEventsId  } = require('../controllers/eventController');


router.get('/health', apiHealth);

router.post('/events', apiEvents);

router.get('/events/:id', apiEventsId);

module.exports = router;