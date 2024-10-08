import './builderNav.css';

function BuilderNav({setAddElement}) {
    
    function addElemBtnHandler() {
        setAddElement((prev) => (!prev));
    }

    return(
        <nav className="builder">
            <button onClick={addElemBtnHandler} className='addElementBtn'>+</button>
            <h1>Name</h1>
            <a href="home">
                Pages
            </a>
        </nav>
    );
}

export default BuilderNav;