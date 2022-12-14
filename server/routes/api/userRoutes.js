const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    login,
    updateOneUser,
    addGroupToUser,
    removeGroupFromUser,
    deleteUser
} = require('../../controllers/userController')

const { authMiddleware } = require('../../utils/auth');

router.route('/signup').post(createUser);
router.route('/login').post(login);
router.route('/:userID').get(getSingleUser).put(updateOneUser)
router.route('/:id/membership/:groupID').put(addGroupToUser);
router.route('/remove/:groupId').delete(removeGroupFromUser).post(deleteUser)
router.route('/').get(getAllUsers); 

module.exports = router;

