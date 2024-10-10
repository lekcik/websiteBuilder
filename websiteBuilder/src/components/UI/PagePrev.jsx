import './pagePrev.css';
import AddElem from './AddElem.jsx';
import { useState } from 'react';
import AddElemHandler from '../Functionality/AddElemHandler.jsx';
import PagesParser from '../Functionality/PagesParser.jsx';

function PagePrev({ showAddElement, setAddElement }) {
    const [pageElements, setPageElements] = useState([
        {
            type: 'p',
            text: 'Halo'
        },
        {
            type: 'p',
            text: 'Halo 2'
        },
        {
            type: 'p',
            text: 'Halo 3'
        },
        {
            type: 'p',
            text: 'Halo 4'
        }
    ]);

    return (
        <section className='pagePrev'>
            <AddElem showAddElement={showAddElement} setAddElement={setAddElement} pageElements={pageElements} setPageElements={setPageElements} />
            <section className='pageElements'>
                {
                    pageElements.map((data, index) => (
                        PagesParser(data, index)
                    ))
                }
            </section>
        </section>
    );
}

export default PagePrev;