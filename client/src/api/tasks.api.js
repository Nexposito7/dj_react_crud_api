import axios from 'axios' //biblio q nos permitirá hacer peticiones 

const tasksApi = axios.create({ //axios, quiero crear una conf
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => {
    //const res = axios.get('http://localhost:8000/tasks/api/v1/tasks') 
    //podemos guardar la espuesta o retornarla direct:
    //return axios.get('http://localhost:8000/tasks/api/v1/tasks/') 
    return tasksApi.get('/') //pide la ruta inicial
}
//func para enviar petición post:
export const createTask = (task) => { //recibe como parám una tarea, el obj titulo o descrip 
    //return axios.post('http://localhost:8000/tasks/api/v1/tasks/') //y los enviamos a través de axios 
    return tasksApi.post('/', task) //envía a la misma ruta, e enviamos la tarea  
}

export const deleteTask = (id) => tasksApi.delete(`/${id}`) //esperamos un id para poder eliminarlo (y lo concatenamos)

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)//par aact necesitamos el id y los datos nuevos

export const getTask = (id) => tasksApi.get(`/${id}/`) 
