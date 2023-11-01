const User = require('../models/user')

const getAllUsers = async (req,res) =>{
  const user = await User.find({})
// res.status(201).json({user})
res.send('all users')
console.log('all users');
}

const createUser = async(req,res)=>{
  const {name, email,password} = req.body;
  if(!name || !email || !password){
    throw new BadRequestError('Please provide name, email, and password!')
    }
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}


module.exports = {getAllUsers, createUser}