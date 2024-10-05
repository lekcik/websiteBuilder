import Card from "../components/Card.jsx";

function Home() {
    return(
        <section className="home" aria-label="your pages">
            <h1>Your Pages</h1>
            <section className="pagesList">
                <Card link={'error'} name={'Error'}/>
                <section className="addPageCard"></section>
            </section>
        </section>
    )
}

export default Home;