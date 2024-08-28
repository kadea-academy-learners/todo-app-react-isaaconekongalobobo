import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// J'importe le composant Nav pour le navbar
import Nav from './assets/components/Nav.tsx'

// J'importe le composant du formulaire
import FormNewTask from './assets/components/FormNewTask.tsx'

// J'importe le composant pour la liste de taches
import TasksList from './assets/components/TasksList.tsx'
// J'importe le fichier de style css
import './assets/css/style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Nav />
    <div className='bloc-principale'>
      <FormNewTask />
      <TasksList/>      
    </div>

  </StrictMode>,
)
