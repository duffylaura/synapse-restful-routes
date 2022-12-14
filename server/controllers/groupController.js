const {Group,User} = require('../models')


module.exports = {
    //get all groups

    async getAllGroups(req,res){
        const allGropus = await Group.find();
    },
    async
}