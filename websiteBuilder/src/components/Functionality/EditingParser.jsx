import { useEffect, useState } from "react";

function PParser({text, index, setTempData}) {
    const [pText, setPText] = useState(text);

    useEffect(() => (
        setTempData((prev) => ({...prev, }))
    ), [pText])

    function textChangeHandler(e) {
        setPText(e.target.value);
    }

    return(
        <input type="text" value={pText} onChange={(e) => {textChangeHandler(e)}} key={index} />
    );
}
 
function EditingParser({data, index, setTempData}) {
    switch (data.type) {
        case 'p':
            return <PParser text={data.text} index={index} setTempData={setTempData} />;
        default:
            console.error(`Unknown type: ${data.type}`);
            return null;
    }
}

export default EditingParser;