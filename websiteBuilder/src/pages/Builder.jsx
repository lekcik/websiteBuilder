import { useState } from "react";
import BuilderNav from "../components/BuilderNav.jsx";
import AddElem from "../components/AddElem.jsx";

function Builder() {
    const [showAddElement, setAddElement] = useState(false);

    return(
        <>
            <BuilderNav setAddElement={setAddElement} />
            <AddElem showAddElement={showAddElement} setAddElement={setAddElement} />
        </>
    );
}

export default Builder;