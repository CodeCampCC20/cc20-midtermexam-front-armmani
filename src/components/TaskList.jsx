import React from 'react'

function TaskList({ item, hdlDelete }) {

  const hdlRemove = (e) => {
    e.preventDefault();
    hdlDelete(item.id);
  }
  return (

    <div className='mt-4 flex justify-between items-center'>
      <label className="label text-orange-200 text-xl">
        <input
          type="checkbox"
          className="checkbox" />
        {item.task}
      </label>
      <button
        type="submit"
        className="btn btn-error btn-xs"
        onClick={hdlRemove}
      >X</button>
    </div>
  )
}

export default TaskList