import axios from "axios";
const apiEP = "http://localhost:8000/users";

// send new users
export const postUser = async (obj) => {
  try {
    const { data } = await axios.post(apiEP, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//get all users
export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(apiEP);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//delete single user
export const deleteUsers = async (_id) => {
  try {
    const { data } = await axios.delete(apiEP + "/" + _id);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//update single user

// const rootAPIUrl = "http://localhost:8000/users";

// export const fetchForm = async () => {
//   try {
//     const { data } = await axios.get(rootAPIUrl);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return {
//       status: "error",
//       message: error.message,
//     };
//   }
// };

// export const postForm = async (formDt) => {
//   try {
//     const { data } = await axios.post(rootAPIUrl, formDt);
//     return data;
//   } catch (error) {
//     return {
//       status: "error",
//       message: error.message,
//     };
//   }
// };
// export const deleteForm = async (_id) => {
//   try {
//     const { data } = await axios.delete(rootAPIUrl, { data: _id });
//     return data;
//   } catch (error) {
//     return {
//       status: "error",
//       message: error.message,
//     };
//   }
// };
