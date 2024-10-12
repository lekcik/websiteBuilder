import './addElem.css';

function AddElem({showAddElement, setAddElement}) {
    const shouldShow = showAddElement ? 'show' : '';

    function closeBtnHandler() {
        setAddElement(false);
    }

    return(
        <section className={`addElement ${shouldShow}`}>
            <button onClick={closeBtnHandler} className='closeBtn'>X</button>
            <h2>Categories</h2>
            <details className="textElements">
                <summary>Text</summary>
                <button>Add paragraph</button>
            </details>
        </section>
    );
}

export default AddElem;