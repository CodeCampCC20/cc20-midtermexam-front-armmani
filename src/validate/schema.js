import * as Yup from "yup"

export const schema = Yup.object({
  username: Yup.string().required('Enter Your Username'),
  password: Yup.string().required('Enter Your Password'),
  task: Yup.string().required('Enter Your Task')
})