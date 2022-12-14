const router = require('express').Router();

const {
    getAllGroups,
    singleGroup,
    createGroup,
    addMemberToGroup,
    deleteGroup
} = require('../../controllers/groupController');

const { authMiddleware } = require('../../utils/auth');


router.route('/').get(getAllGroups);
router.route('/:groupID').get(singleGroup);
router.route('/createGroup').post(createGroup);
router.route('/:id/member/:memberID').put(addMemberToGroup);
router.route('/group/groupId').delete(deleteGroup);

module.exports = router;
