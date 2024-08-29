import '../css/style.css'
interface TaskList {
    allTasks: [];
}
const TasksList = (taskslist: TaskList) => {


    interface Task {
        taskName : string,
        taskDescription : string
    }

    const tbAllTasks = taskslist.allTasks
    
    
    const tasks = tbAllTasks.map ((task : Task) => {
        return <li>
                <div className='bloc-task-item'>
                    <input type="checkbox" />
                    <label>{task.taskName}</label>
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