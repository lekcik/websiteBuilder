import './pagePrev.css';
import { useRef, useState } from 'react';
import AddElem from './AddElem.jsx';
import PagesParser from '../Functionality/PagesParser.jsx';
import EditingParser from '../Functionality/EditingParser.jsx';

function StaticElem({data, index, editElement, removeElement}) {
    return(
        <>
            <PagesParser data={data} index={index} />
            <section className='buttons'>
                <button onClick={() => {editElement(index)}}>
                    <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 306.637 306.637" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"></path> <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095 L265.13,75.602L231.035,41.507z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                </button>
                <button onClick={() => {removeElement(index)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
                    </svg>
                </button>
            </section>
        </>
    );
}

function EditedElem({data, index, cancelEditElement, confirmEditElement, cancelAddingElement}) {
    const [tempData, setTempData] = useState({...data});

    return(
        <>
            <EditingParser data={tempData} index={index} setTempData={setTempData} />

            {!tempData.temporal
            ? <section className='buttons'>
                <button onClick={() => confirmEditElement(index, tempData)}>Confirm</button>
                <button onClick={cancelEditElement}>Cancel</button>
            </section>
            : <section className='buttons'>
                <button onClick={() => confirmEditElement(index, tempData)}>Confirm</button>
                <button onClick={() => cancelAddingElement(index)}>Cancel</button>
            </section>
            }
        </>
    );
}

function PagePrev({ showAddElement, setAddElement }) {
    const [pageElements, setPageElements] = useState([
        { type: 'p', values: {text: 'Halo'}, editing: false },
        { type: 'p', values: {text: 'Halo2'}, editing: false  },
        { type: 'p', values: {text: 'Halo3'}, editing: false  },
        { type: 'p', values: {text: 'Halo4'}, editing: false  }
    ]);

    function removeElement(index) {
        const filteredArray = pageElements.filter((_, i) => i !== index);
        setPageElements(filteredArray);
    }

    function editElement(index) {
        const updatedArray = pageElements.map((element, i) => {
            if (i === index) {
                return { ...element, editing: true }; 
            }
            return { ...element, editing: false }; 
        });

        setPageElements(updatedArray);
    }

    function cancelEditElement() {
        const updatedArray = pageElements.map((element, i) => {
            return { ... element, editing: false };
        });

        setPageElements(updatedArray);
    }

    function confirmEditElement(index, element) {
        const updatedArray = pageElements.map((prevElement, i) => {
            if (i === index) {
                return {...element, editing: false};
            }
            return prevElement;
        })

        setPageElements(updatedArray);
    }

    function cancelAddingElement(index) {
        const filteredArray = pageElements.filter((_, i) => i !== index);
        setPageElements(filteredArray);
    }


    return (
        <section className='pagePrev'>
            <AddElem showAddElement={showAddElement} setAddElement={setAddElement} setPageElements={setPageElements} />
            <section className='pageElements'>
                {pageElements.map((data, index) => (
                    <section className={`elementContainer editing-${data.editing}`} key={index}>
                        {
                            data.editing 
                            ? <EditedElem data={data} index={index} cancelEditElement={cancelEditElement} confirmEditElement={confirmEditElement} cancelAddingElement={cancelAddingElement} />
                            : <StaticElem data={data} index={index} editElement={editElement} removeElement={removeElement} />
                        }
                    </section>
                ))}
            </section>
        </section>
    );
}

export default PagePrev;

// code is being refactored
