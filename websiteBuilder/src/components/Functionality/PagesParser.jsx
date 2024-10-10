
function PParser({ text, index }) {
    return <p key={index}>{text}</p>;
}

function PagesParser({ data, index }) {
    switch (data.type) {
        case 'p':
            return <PParser text={data.text} index={index} />;
        default:
            console.error(`Unknown type: ${data.type}`);
            return null;
    }
}

export default PagesParser;