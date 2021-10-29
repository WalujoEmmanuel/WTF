const express = require('express');
const router = express.Router();
const acronymController = require('../controllers/acronymController');
const authController = require('./../controllers/authController');

router
    .route('/')
    .get(acronymController.getAllAcronyms)
    .post(acronymController.createAcronym);

// Protect all routes after this middleware
router.use(authController.protect);

router
    .route('/:acronym')
    .put(acronymController.updateAcronym)
    .delete(acronymController.deleteAcronym);

module.exports = router;