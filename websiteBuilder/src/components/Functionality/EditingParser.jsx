import { useEffect, useState } from "react";

function PParser({values, index, setTempData}) {
    const [pText, setPText] = useState(values.text);

    useEffect(() => {
        setTempData((prev) => ({...prev, values: {...prev.values, text: pText}}));
    }, [pText]);

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
            return <PParser values={data.values} index={index} setTempData={setTempData} />;
        default:
            console.error(`Unknown type: ${data.type}`);
            return null;
    }
}

export default EditingParser;