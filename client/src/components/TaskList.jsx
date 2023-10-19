import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
      //es como decirle q esto se está ejec mientras está haciendo otra operación:
        async function loadTasks() {
          const res = await getAllTasks(); //al ejec nos dará una respuesta 
          //console.log(res); //mostramos, de momento, la respuesta por consola 
          setTasks(res.data); //guardamos data
        }
        loadTasks(); //y la llamamos para poder ejecutarla
    }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {/**de todas las tareas vas a recorrerlas, y por cada una vas a mostrar un div*/}
      {tasks.map(tasks => (
          <TaskCard key={tasks.id} tasks={tasks} />
    ))}
  </div>);
}
