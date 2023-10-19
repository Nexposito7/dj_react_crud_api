import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom' //import el hook 
import {toast} from 'react-hot-toast' //import la func

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm(); //la func register es para poder registrar inpunts 
    const navigate = useNavigate() //lo ejec
    const params = useParams() //ejec y guardamos en una const
    //console.log(params)
    const onSubmit = handleSubmit(async data => {
        //console.log(data)
        //const res = await createTask(data); //lo ejecutamos y le pasamos la tarea, q sería el dato por consola 
        //console.log(res);
        if (params.id) {
            //console.log('actualizando');
            await updateTask(params.id, data) //le pasamos el id y los datos nuevos, y es asíncrono
            toast.success('Tarea actualizada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        } else {
            await createTask(data);
            //cuando se ejec createTask ejec el método succes de toast 
            toast.success('Tarea creada')
        }
        navigate('/tasks'); //una vez q termine de crear/edit nos direcciona a 
    });
    useEffect(() => {//esta func recibe como parám otra func 
        async function loadTask() { //para usar async debemos crear otra func dentro de useEffect
            if (params.id) { //si existe params.id
                //console.log('obteniendo datos')
                const res = await getTask(params.id)
                console.log(res) //vemos la resp del serv 
                setValue('title', res.data.title) //al valor de 'title' le colocará como valor lo que viene de res.data.title 
                setValue('description', res.data.description)
            }
        }
        loadTask();
    }, []); //y como 2do parám un arreglo
    return (
        <div className='max-w-xl mx-auto'> {/**<--*/}
            {/**<form onSubmit={handleSubmit(data)}> //la ejec, y al hacerlo nos dará unos datos q podremos ver*/}
            <form onSubmit={onSubmit}> {/**mejor lo ponemos en una func: onSubmit*/}
                <input 
                    type="text" 
                    placeholder="title" 
                    {...register("title", {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {/**si existe un error en el título */}
                    {errors.title && <span>this field is requed</span>}
                <textarea rows="3" placeholder="Description"
                    {...register("description", {required: true})} 
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' ></textarea>
                    {errors.description && <span>this field is required</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
            </form>
            {params.id && 
            <div className='flex justify-end'>
                <button className='bg-red-500 p-3 rounded-lg block w-48 mt-3' onClick={async () => {
                const accepted = window.confirm('are you sure?')
                if (accepted) {
                    await deleteTask(params.id)
                    toast.success('Tarea eliminada')
                    navigate('/tasks') //navegamos a /tasks después de eliminar
                }
                }}>Delete</button>
            </div>} {/**si params.id existe, entonces muestra el botón */}
        </div>
    )
}
//ejec el obj ylo copiamos conlos 3puntos, paraq se añada al input como prop(le indic el nomb de la const donde guardará)