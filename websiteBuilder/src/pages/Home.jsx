import { PagesContext } from "../App.jsx";
import Card from "../components/Card.jsx";
import { useContext } from "react";
import React from 'react';

function Home() {
    const [pages, setPages] = useContext(PagesContext);

    console.log(pages);

    return (
        <section className="home" aria-label="your pages">
            <h1>Your Pages</h1>
            <section className="pagesList">
                <Card link={'error'} name={'Error'} />
                <section className="addPageCard"></section>
            </section>

            <section className="test">
                <h2>{pages[0].name}</h2>
                {pages[0].elements.map((element, index) => (
                    React.createElement(element.type, { key: index, dangerouslySetInnerHTML: { __html: element.innerHTML } })
                ))}
            </section>
        </section>
    );
}

export default Home;
