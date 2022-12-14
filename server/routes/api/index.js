const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groupRoutes = require('./groupRoutes');

router.use('/user', userRoutes);
router.use('/group', groupRoutes);

module.exports = router
