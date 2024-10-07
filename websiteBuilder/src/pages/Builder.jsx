import { useState } from "react";

function Builder() {
    const [elements, setElements] = useState([]);
    const [input, setInput] = useState('');

    function inpHandler(e) {
        setInput(e.target.value);
    }

    function btnHandler() {
        setElements((e) => [...e, input]);

        setInput('');
    }

    return(
        <>
            <section className="builder">
                <input value={input} onChange={inpHandler} type="text" />
                <button onClick={btnHandler}>Add paragraph</button>
            </section>
        
            <section className="prev">
                {
                    elements.map((data, index) => (
                        <p key={index}>{data}</p>
                    ))
                }
            </section>
        </>
    );
}

export default Builder;