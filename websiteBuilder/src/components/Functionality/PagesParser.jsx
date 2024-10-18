
function PParser({ values, index }) {
    return <p className={`element`} key={index}>{values.text}</p>;
}

function PagesParser({ data, index }) {
    switch (data.type) {
        case 'p':
            return <PParser values={data.values} index={index} />;
        default:
            console.error(`Unknown type: ${data.type}`);
            return null;
    }
}

export default PagesParser;