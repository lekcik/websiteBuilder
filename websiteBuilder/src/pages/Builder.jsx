import { useState } from "react";
import BuilderNav from "../components/BuilderNav.jsx";
import AddElem from "../components/AddElem.jsx";
import PagePrev from "../components/PagePrev.jsx";
import './builder.css';

function Builder() {
    const [showAddElement, setAddElement] = useState(false);

    return(
        <section className="builder">
            <BuilderNav setAddElement={setAddElement} />
            <AddElem showAddElement={showAddElement} setAddElement={setAddElement} />
            <PagePrev />
        </section>
    );
}

export default Builder;