const router = require('express').Router();

const {
    getAllGroups,
    createGroup,
    addMemberToGroup,
    deleteGroup
} = require('../../controllers/groupController');
const { create } = require('../../models/User');

const { authMiddleware } = require('../../utils/auth');

router.route('/createGroup').post(createGroup);
router.route('/groups').get(getAllGroups);
router.route('/newMember').put(authMiddleware,addMemberToGroup);
router.route('/group/groupId').delete(authMiddleware,deleteGroup);

module.exports = router;
