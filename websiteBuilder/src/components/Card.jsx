import PropTypes from 'prop-types';

function Card(props) {
    return(
        <a href={props.link} className="card">
            <iframe src={props.link} />
            <p>{props.name}</p>
        </a>
    )
}

Card.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string
}

export default Card;