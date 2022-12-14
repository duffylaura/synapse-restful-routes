const userData = require('./user.json');
const groupData = require('./group.json');
const db = require('../config/connection');
const{User, Group} = require('../models');


db.once('open', async () =>{
    await User.deleteMany({});
    await Group.deleteMany({});
    
    const user = await User.insertMany(userData);
    const group = await Group.insertMany(groupData);

    for (newGroup of group){
        newGroup.members = user
        await newGroup.save(); 
    }

    for(newUser of user){
        newUser.memberships = group;
        await newUser.save();
    }

    console.log("all done")
    process.exit(0);
})