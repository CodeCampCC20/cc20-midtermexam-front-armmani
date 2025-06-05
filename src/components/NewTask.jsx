import React, { useState } from 'react'
import TaskList from './TaskList';
import { schemaTask } from '../validate/schemaTask'
import { YupToError } from '../validate/YupToError';

function NewTask() {

  const [inputTask, setInputTask] = useState([]);
  const [input, setInput] = useState("");
  const [errTask, setErrTask] = useState("");

  const hdlAddTask = async (e) => {
    e.preventDefault();

    try {
      await schemaTask.validate({ task: input }, { abortEarly: false });
      setErrTask({});
      let clonearr = [...inputTask, { id: Date.now(), task: input }]
      setInputTask(clonearr)
      setInput("")
    } catch (error) {
      const errObj = YupToError(error)
      setErrTask(errObj)
    }
  }

  const hdlDelete = (id) => {
    setInputTask((delTask) => {
      const newList = delTask.filter((el) => (el.id !== id))
      return newList;
    })
  }

  return (
    <div>
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-100 border p-4">
        <legend className="fieldset-legend text-2xl">My TODO List</legend>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-xl">New Task</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Type HERE"
            value={input}
            id='task'
            onChange={(e) => setInput(e.target.value)}
          />
          <p className='text-red-500 text-center'>{errTask.task}</p>
        </fieldset>
        <button
          type="submit"
          className="btn btn-accent mt-4"
          onClick={hdlAddTask}
        >Add New Task</button>
        {inputTask.map(el => (
          <TaskList key={el.id} item={el} hdlDelete={hdlDelete} />
        ))}
      </fieldset>
    </div>
  )
}

export default NewTask