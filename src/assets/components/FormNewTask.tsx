import { useState } from 'react';
import '../css/style.css'

// J'importe le composant pour la liste de taches
import TasksList  from './TasksList';

const FormNewTask = () => {

    // Je recupere toute les taches depuis le local storage
    const allTasks = localStorage.getItem ("tasks")
    // J'initialise un tableau vide qui sera passe comme valeur par defaut au composant <TaskList/>
    let tbTasks = []
    
    if (allTasks) {
        tbTasks = JSON.parse (allTasks)
    }

    // Variable d'etat pour gerer et modifier la donnee passee au composant <TaskList/>
    const [taskslist, setTasksList] = useState (tbTasks)

    // Fonction pour extraire les donnee du formulaire et le stocker dans le local storage
    const extractionDeDonnee = (e) => {

        e.preventDefault();
        const formulaireCible = e.target

        // Recuperation des donne du formulaire
        const formData = new FormData (formulaireCible)

        // Je recupere les donnee du formulaire par leurs nom
        const taskName = formData.get ('taskname')?.toString()
        const taskDescription = formData.get ('taskdescription')?.toString()
        
        // Je recupere les taches stockee dans le local storage
        const dataInBrowser = localStorage.getItem ("tasks")

        if (!dataInBrowser || dataInBrowser.length === 0) {
            // je cree le tableau qui va contenir toute les taches et j'y affecte la tache donnee
            localStorage.setItem ("tasks", JSON.stringify (
                [
                    {taskName, taskDescription}
                ]
            ))

            // Je recupere maintenant le tableau
            const tbTasks = localStorage.getItem ("tasks") 
            const newTasksList = JSON.parse (tbTasks || "")
            
            // Je modifie l'etat de <TaskList/>
            setTasksList (newTasksList)
            alert ("Nouvelle taches Ajoutee!")
            e.target.reset()             
        } else {
            // Je convertit la chaine en un objet exploitable
            const newDataInBrowser = JSON.parse (dataInBrowser || "")
            // Je push dans ce tableau un autre objet contenant les informations sur la nouvelle tache
            newDataInBrowser.push ({taskName, taskDescription})
            localStorage.setItem ("tasks", JSON.stringify (newDataInBrowser))

            // Je recupere maintenant le tableau
            const tbTasks = localStorage.getItem ("tasks") 
            const newTasksList = JSON.parse (tbTasks || "")

            // Je modifie l'etat de <TaskList/>
            setTasksList (newTasksList)
            alert ("Nouvelle taches Ajoutee!")
            e.target.reset()
        }

    }

    return (
        <>
        <div className='bloc-principale'>
            <form className='form-new-task' onSubmit={extractionDeDonnee}>
                <div className='bloc-input'>
                    <label htmlFor="">Entrez le nom de la tache </label>
                    <input type="text" name='taskname' id='taskname' />
                </div>
                <div className='bloc-input'>
                    <label htmlFor="">Entrez une Description (Facultatif ) </label>
                    <textarea name="taskdescription" id="taskdescription" rows={5}></textarea>
                </div>
                <div className='bloc-input'>
                    <input type="submit" name='btn-submit' id='btn-submit' value={"Ajouter la tache"}/>     
                </div>
            </form>
            {/* Composant pour la liste des taches */}
            <TasksList allTasks={taskslist} />
        </div>
       
        </>

    )
}  

export default FormNewTask