import './addElem.css';

function AddElem({showAddElement, setAddElement, setPageElements}) {
    const shouldShow = showAddElement ? 'show' : '';

    function closeBtnHandler() {
        setAddElement(false);
    }

    function addParagraphHandler() {
        const elem = { type: 'p', text: '', editing: true, temporal: true };
        setPageElements((prev) => [...prev, elem]);
    }

    return(
        <section className={`addElement ${shouldShow}`}>
            <button onClick={closeBtnHandler} className='closeBtn'>X</button>
            <h2>Categories</h2>
            <details className="textElements">
                <summary>Text</summary>
                <button onClick={addParagraphHandler}>Add paragraph</button>
            </details>
        </section>
    );
}

export default AddElem;