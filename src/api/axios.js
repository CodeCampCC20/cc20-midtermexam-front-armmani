import axios from 'axios';

const baseURL = 'http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com'
const todoApi = {}

todoApi.login = (input) => {
  return axios.post(`${baseURL}/api/V1/auth/login`, input)
}

export default todoApi;