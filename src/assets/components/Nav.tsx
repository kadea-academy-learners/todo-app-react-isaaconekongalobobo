import '../css/style.css'

const Nav = () => {
    return (
        <nav className="navbar">
            <h1>Exercice Todo list</h1>
            <div className='onglets'>
                <a href="">Toute les taches </a>
                <a href="">Taches Effectuee </a>
            </div>
            
            <div className='bloc-btn-cta'>
                <button id='btn-new-task'>
                    Creer une tache
                </button>
            </div>
        </nav>
    )
}

export default Nav