const express = require('express');
const router = express.Router();
const counselingSessionController = require('../controllers/counselingSessionController');

router.post('/', counselingSessionController.createSession);
router.get('/', counselingSessionController.readSessions);
router.get('/:id', counselingSessionController.getSession);
router.put('/:id', counselingSessionController.updateSession);
router.delete('/:id', counselingSessionController.deleteSession);

module.exports = router;
