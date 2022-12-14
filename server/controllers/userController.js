const {User}= require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    //get all users 
    async getAllUsers(req, res) {
        const users = await User.find(); 
        return (res.json(users))
    },
    //get a single User by their id or username
    async getSingleUser(req, res) {
        const foundUser = await User.findOne({_id:req.params.userID})
        res.json(foundUser);
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

    async addGroupToUser({params,body},res) {
        User.findOneAndUpdate({_id: params.id}, {$addToSet: { memberships: params.groupID}}, {new: true})
        .populate({path: 'memberships', select: ('-__v')})
        .then(dbUsersData => {
            if (!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
        return (res.json(dbUsersData));
        })
        .catch(err => res.json(err));
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

