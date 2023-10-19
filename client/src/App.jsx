import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom' //biblioteca para tener múlt rutas
//BrowserRouter es el componente q va a englobar a todo, y dentro otro comp llamado Routes, neces para Brow. 
//y dentro uno en singular: Route, q recibe dos prop (nomb de la ruta, y lo q va a mostrar)
import { TaskPage } from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          {/**cuando se visite tasks/ se monstrará TaskPage */}
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} /> {/**indicamos que va a ir un valor dinámico */}
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}
export default App








