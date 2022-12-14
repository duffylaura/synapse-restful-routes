const router = require('express').Router();

const {
    getAllGroups,
    createGroup,
    addMemberToGroup,
    deleteGroup
} = require('../../controllers/groupController');

const { authMiddleware } = require('../../utils/auth');

router.route('/createGroup').post(createGroup);
router.route('/').get(getAllGroups);
router.route('/newMember').put(authMiddleware,addMemberToGroup);
router.route('/group/groupId').delete(authMiddleware,deleteGroup);

module.exports = router;
