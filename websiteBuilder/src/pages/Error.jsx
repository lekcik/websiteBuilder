function Error() {
    return (
        <section className="error" aria-label="page not found" style={{ position: 'relative', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'hidden' }}>
            <span style={{ fontWeight: 500, fontSize: '2rem', fontFamily: 'Consolas', textAlign: 'center' }}>
                404. Page not found ( ͡° ͜ʖ ͡°)
            </span>
        </section>
    );
}

export default Error;
