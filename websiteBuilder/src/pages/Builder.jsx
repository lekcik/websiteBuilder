import { useState } from "react";
import BuilderNav from "../components/BuilderNav.jsx";
import PagePrev from "../components/PagePrev.jsx";
import './builder.css';

function Builder() {
    const [showAddElement, setAddElement] = useState(false);

    return(
        <section className="builder">
            <BuilderNav setAddElement={setAddElement} />
            <PagePrev showAddElement={showAddElement} setAddElement={setAddElement} />
        </section>
    );
}

export default Builder;