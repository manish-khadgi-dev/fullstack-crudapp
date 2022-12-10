import UserSchema from "./UserSchema.js";

//Create
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
//Read
export const getUsers = () => {
  return UserSchema.find();
};

//Update , filter, updateObj must be object
export const updateUsers = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj, { new: true }); // {new : true } return data after updating the database.
};

// //Delete
// export const deleteUsers = (filter) => {
//   return UserSchema.findOneAndDelete(filter);
// };

//_id must be an string
export const deleteUserByID = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
