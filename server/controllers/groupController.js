const {Group,User} = require('../models')


module.exports = {
    //get all groups

    async getAllGroups(req,res){
        const allGroups = await Group.find();
        return res.json(allGroups)
    },
    async singleGroup(req,res){
        const oneGroup = await Group.findOne({_id:req.params.groupID})
        res.json(oneGroup);
    },
    async createGroup({body},res){
        const newGroup = await Group.create(body);
        return res.json(newGroup)
    },

    async addMemberToGroup({params,body},res) {
        Group.findOneAndUpdate({_id: params.id}, {$addToSet: { members: params.memberID}}, {new: true})
        .populate({path: 'members', select: ('-__v')})
        .then(dbGroupData => {
            if (!dbGroupData) {
                res.status(404).json({message: 'No Group with this particular ID!'});
                return;
            }
        return (res.json(dbGroupData));
        })
        .catch(err => res.json(err));
    },
    //delete group

    async deleteGroup(req,res){
        const group = await Group.findOneAndDelete({_id:req.params.groupId})
        return res.json("group deleted")
    },
    async deleteMemberFromGroup (req,res){
        const updatedGroup = await Group.findOneAndUpdate(
            { _id: req.params.id},
            {$pull: {memberships: req.params.memberID}},
            {new:true}
        );
        return res.json(updatedGroup)
    },

}