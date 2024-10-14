function PParser({text, index}) {
    return <p className={`element`} key={index}>{text}</p>;
}
 
function EditingParser({data, index}) {
    switch (data.type) {
        case 'p':
            return <PParser text={data.text} index={index} />;
        default:
            console.error(`Unknown type: ${data.type}`);
            return null;
    }
}

export default EditingParser;