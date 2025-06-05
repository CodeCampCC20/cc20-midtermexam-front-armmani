import React from 'react'
import { useNavigate } from 'react-router';
import NewTask from '../components/NewTask';

function TodoPage() {

  const gogo = useNavigate();

  const hdlSubmit = (e) => {
    e.preventDefault();
    gogo("/")
  };

  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <NewTask />
      <button
        type="submit"
        className="btn btn-neutral mt-4"
        onClick={hdlSubmit}
      >Logout</button>
    </div>
  )
}

export default TodoPage