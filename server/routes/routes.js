const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');
const projectsController = require('../controllers/projectsController');
const blogController = require('../controllers/blogController');

router.get('/', pagesController.home);
router.get('/about', pagesController.about);
router.get('/projects', projectsController.index);
router.get('/blog', blogController.index);

module.exports = router;
