import {useContext,useState} from 'react'
import {TaskContext} from '../context/TaskContext'


export default function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title,
            description
        }
        createTask(newTask)
        setTitle('')
        setDescription('')
    }
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
          <input placeholder="Escribe una tarea" 
          onChange = {(e) => setTitle(e.target.value)} 
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          />
          <textarea placeholder="Descripción de la tarea" 
          cols="30" 
          rows="5" 
          onChange = {(e) => setDescription(e.target.value)}  
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          ></textarea>
          <button className="bg-indigo-500 px-3 py-1 text-white">Gurada</button>
      </form>
    </div>
  )
}
1