const router = require('express').Router();
const userRoutes = require('./groupRoutes');
const groupRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/group', groupRoutes);

module.exports = router;
