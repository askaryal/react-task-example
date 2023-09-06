import {createContext,useState,useEffect} from 'react'
import {tasks as data} from '../data/tasks'


export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(newTask){
        setTasks([...tasks, {
          title: newTask.title,
          id:tasks.length,
          description: newTask.description
        }])
    }
    function deleteTask(taskId){
        console.log("taskId: "+taskId);
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    useEffect(() => {
        setTasks(data)
      }, [])


  return (
    <TaskContext.Provider
        value={{
            tasks,
            createTask,
            deleteTask
        }}
    >
        { props.children }
    </TaskContext.Provider>
  )
}

