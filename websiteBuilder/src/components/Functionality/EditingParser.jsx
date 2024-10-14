
function EditingParser({data, index}) {
    switch (data.type) {
        case 'p':

        default:
            console.error(`Unknown type: ${data.type}`);
            return null;
    }
}

export default EditingParser;