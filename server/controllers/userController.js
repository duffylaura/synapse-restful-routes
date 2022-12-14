const {User}= require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    //get all users 
    async getAllUsers(req, res) {
        const users = await User.find(); 
        return (res.json(users))
    },
    //get a single User by their id or username
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });
        return res.json(foundUser);
      },

      //create a user (signup)

    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
         res.json({ token, user });
    },
    
    // login a user with either a username an dpassword 

    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username}] });
        if (!user) {
        return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
        return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    //add a group to a user

    async addGroupToUser({user,body},res) {
        console.log(user) 
        try {
            const updatedUser = await User.findOneAndUpdate(
                {_id:user._id},
                {$addToSet:{memberships:body}},
                {new:true}
            );
            return res.json(updatedUser);
        }catch(err){
            console.log(err)
        }
    },

    //deleteGroup from user 

    async removeGroupFromUser({user,params},res){
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            {$pull: {memberships:{groupID:params.groupID}}},
            {new:true}
        );
        return res.json(updatedUser)
    },

    //delete a user
    async deleteUser(req,res){
        const user = await User.findOneAndDelete({_id:req.params.userId})
        return res.json("deleted")
    }
}
