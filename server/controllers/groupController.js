const {Group,User} = require('../models')


module.exports = {
    //get all groups

    async getAllGroups(req,res){
        const allGroups = await Group.find();
        return res.json(allGroups)
    },

    async createGroup({body},res){
        const newGroup = await Group.create(body);
        return res.json(newGroup)
    },

    async addMemberToGroup({user,body},res){
        try{ 
            const groupUpdated = await Group.findByIdAndUpdate(
            {_id:body.id},
            {$addToSet:{members:user.id}},
            {new:true}
        );
        return res.json(groupUpdated);
        }catch(err){
            console.log(err)
        } 
    },
    //delete group

    async deleteGroup(req,res){
        const group = await Group.findOneAndDelete({_id:req.params.groupId})
        return res.json("group deleted")
    }
}