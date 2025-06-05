import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { YupToError } from '../validate/YupToError'
import { schema } from '../validate/schema';
import todoApi from '../api/axios';

function LoginPage() {

  const gogo = useNavigate();

  const [formData, setFormData] = useState({
      username: "",
      password: ""
    }
  );
  const [errObj, setErrObj] = useState({});

  const hdlChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false })
      const res = await todoApi.login(formData);
      console.log("res", res.data)
      setErrObj({});
      gogo("/todolist");

    } catch (error) {
      console.log(error)
      const errObj = YupToError(error);
      setErrObj(errObj);
    }
  }
  
  return (
    <div className='flex justify-center items-center h-screen'>

      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">WELCOME</legend>

        <label className="label">Username</label>
        <input
          type="text"
          className="input"
          placeholder="Username"
          id="username"
          value={formData.username}
          onChange={hdlChange}
        />
        <p className='text-red-500 text-center'>{errObj.username}</p>

        <label className="label">Password</label>
        <input
          type="text"
          className="input"
          placeholder="Password"
          id="password"
          value={formData.password}
          onChange={hdlChange}
        />
        <p className='text-red-500 text-center'>{errObj.password}</p>

        <button
          type="submit"
          className="btn btn-neutral mt-4"
          onClick={hdlSubmit}
        >Login</button>
      </fieldset>
    </div>
  )
}

export default LoginPage