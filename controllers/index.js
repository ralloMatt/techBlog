const router = require('express').Router();

const homePageRoutes = require('./homePageRoutes');

router.use('/', homePageRoutes);

module.exports = router;