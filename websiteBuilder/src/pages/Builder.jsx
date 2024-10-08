import { useState } from "react";
import BuilderNav from "../components/BuilderNav.jsx";
import AddElem from "../components/AddElem.jsx";
import PagePrev from "../components/PagePrev.jsx";

function Builder() {
    const [showAddElement, setAddElement] = useState(false);

    return(
        <>
            <BuilderNav setAddElement={setAddElement} />
            <AddElem showAddElement={showAddElement} setAddElement={setAddElement} />
            <PagePrev />
        </>
    );
}

export default Builder;