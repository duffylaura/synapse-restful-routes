const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    login,
    addGroupToUser,
    removeGroupFromUser,
    deleteUser
} = require('../../controllers/userController')

const { authMiddleware } = require('../../utils/auth');

router.route('/signup').post(createUser);
router.route('/login').post(login);
router.route('/profile').get(authMiddleware,getSingleUser);
router.route('/group').put(authMiddleware,addGroupToUser);
router.route('/remove/:groupId').delete(removeGroupFromUser).post(deleteUser)
router.route('/').get(getAllUsers); 

module.exports = router;