import { useState } from "react";

function PagesParser(pages) {
    const [pagesArray, setPagesArray] = useState([]);

    const pageJsx = {
        <h1>Halo</h1>
        <p>It's your page</p>
    }

    setPagesArray((pA) => (...pA, pageJsx));

    return(pagesArray);
}

export default PagesParser;