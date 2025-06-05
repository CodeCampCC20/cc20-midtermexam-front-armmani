import React from 'react'

function TaskList({ item }) {

  const hdlRemove = (e) => {
    e.preventDefault
  }
  return (

    <div className='mt-4 flex justify-between'>
      <label className="label">
        <input
          type="checkbox"
          className="checkbox" />
        {item.task}
      </label>
      <button
        type="submit"
        className="btn btn-error"
        onClick={hdlRemove}
      >X</button>
    </div>
  )
}

export default TaskList