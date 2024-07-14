import { User } from "../../mongo/user.js"

export const getUsers = async (req, res, next) => {
  const users = await User.find({}).limit(5);
  console.log('--users--', users);
  res.status(201).json({data: 'getUsers'})
}

export const createUser = (req, res, next) => {
  res.status(201).json({data: 'createUser'})
}

export const updateUser = (req, res, next) => {
  res.status(201).json({data: 'updateUser'})
}

export const deleteUser = (req, res, next) => {
  res.status(201).json({data: 'deleteUser'})
}

export default {};