import '../css/style.css'

const TasksList = () => {
    // Fonction pour recuperer les taches depuis le local storage pour les afficher en liste
    // const tasksList = () => {
    //     const allTasks = localStorage.getItem ("tasks")
    //     const tbAllTasks = JSON.parse (allTasks || "")
    //     if (allTasks?.length !== 0 ) {
    //         const tasks = tbAllTasks.map ((task) => {
    //             return <li> {task.taskName} </li>
    //         })
    //     }
    // }

    const allTasks = localStorage.getItem ("tasks")
    const tbAllTasks = JSON.parse (allTasks || "")
    const tasks = tbAllTasks.map ((task) => {
        return <li>
                <div className='bloc-task-item'>
                    <input type="checkbox" name={task.id} id={task.id} />
                    <label htmlFor={task.id}>{task.taskName}</label>
                    <div className='bloc-bouton'>
                        <button className='btn-suppression'>Supprimer</button>
                        <button className='btn-suppression'>Modifier</button>                        
                    </div>

                </div>
              </li>
    })
    return (
        <>
            <div className='bloc-tasks-list'>
                <h2 className='titre-liste-taches'>LISTE DES TACHES </h2>
                <div className='tasks'>
                    <ul>
                        {tasks}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TasksList