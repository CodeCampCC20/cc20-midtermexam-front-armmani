import * as Yup from "yup"

export const schemaTask = Yup.object({
  task: Yup.string().required('Enter Your TASK')
})

