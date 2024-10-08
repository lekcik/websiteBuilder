import './builderNav.css';

function BuilderNav({setAddElement}) {
    
    function addElemBtnHandler() {
        setAddElement(true);
    }

    return(
        <nav className="builderNav">
            <button onClick={addElemBtnHandler} className='addElementBtn'>+</button>
            <h1>Name</h1>
            <a href="home">
                Pages
            </a>
        </nav>
    );
}

export default BuilderNav;