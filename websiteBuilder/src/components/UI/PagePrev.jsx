import './pagePrev.css';
import AddElem from './AddElem.jsx';
import { useRef } from 'react';
import AddElemHandler from '../Functionality/AddElemHandler.jsx';

function PagePrev({ showAddElement, setAddElement }) {

    return (
        <section className='pagePrev'>
            <AddElem showAddElement={showAddElement} setAddElement={setAddElement} />
            <section className='pageElements'>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
                <p>halo</p>
            </section>
        </section>
    );
}

export default PagePrev;