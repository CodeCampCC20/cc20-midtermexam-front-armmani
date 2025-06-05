import React, { useState } from 'react'
import TaskList from './TaskList';


function NewTask() {

  const [inputTask, setInputTask] = useState([]);
  const [input, setInput] = useState("");

  const hdlAddTask = (e) => {
    let clonearr = [...inputTask , { id: Date.now(), task: input}]
    setInputTask(clonearr)
    setInput("")
  }

  return (
    <div>
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
        <legend className="fieldset-legend">My TODO List</legend>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">New Task</legend>
          <input
            type="text"
            className="input"
            placeholder="Type HERE"
            value={input}
            id='task'
            onChange={(e) => setInput(e.target.value)}
          />
        </fieldset>
        <button
          type="submit"
          className="btn btn-neutral mt-4"
          onClick={hdlAddTask}
        >Add New Task</button>
        {inputTask.map(el => (
          <TaskList key={el.id} item={el} />
        ))}
      </fieldset>
    </div>
  )
}

export default NewTask