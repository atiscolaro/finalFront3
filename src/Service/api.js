import axios from 'axios'

const getUsers = async () => {

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    return response
  } catch (error) {
    console.log(error)
    throw error;
  }
}

const getUserDetails = async (id) => {

  try {
    const responseDetails = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    
    return responseDetails
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export {
  getUsers,
  getUserDetails,
}