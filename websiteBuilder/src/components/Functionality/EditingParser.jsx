import { useState } from "react";

function PParser({text, index}) {
    const [pText, setPText] = useState(text);

    function textChangeHandler(e) {
        setPText(e.target.value);
    }

    return(
        <input type="text" value={pText} onChange={(e) => {textChangeHandler(e)}} key={index} />
    );
}
 
function EditingParser({data, index}) {
    switch (data.type) {
        case 'p':
            return <PParser text={data.text} index={index} />;
        default:
            console.error(`Unknown type: ${data.type}`);
            return null;
    }
}

export default EditingParser;