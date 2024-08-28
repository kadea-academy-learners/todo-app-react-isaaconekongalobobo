import '../css/style.css'

const FormNewTask = () => {
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

        if (!dataInBrowser) {
            // je cree le tableau qui va contenir toute les taches et j'y affecte la tache donnee
            localStorage.setItem ("tasks", JSON.stringify (
                [
                    {taskName, taskDescription}
                ]
            ))
            alert ("Nouvelle taches Ajoutee!")
            e.target.reset()             
        } else {
            // Je convertit la chaine en un objet exploitable
            const newDataInBrowser = JSON.parse (dataInBrowser || "")
            // Je push dans ce tableau un autre objet contenant les informations sur le la nouvelle tache
            newDataInBrowser.push ({taskName, taskDescription})
            localStorage.setItem ("tasks", JSON.stringify (newDataInBrowser))
        }
        alert ("Nouvelle taches Ajoutee!")
        e.target.reset()
    }

    return (
        <>
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
        </>

    )
}  

export default FormNewTask