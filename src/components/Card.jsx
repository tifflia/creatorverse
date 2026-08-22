import './Card.css'
import { Link } from 'react-router-dom';
import editIcon from '../assets/edit.png';
import infoIcon from '../assets/info.png';
import { prettyUrl, fullUrl } from '../urls';

// name, url, description, imageURL

// escape only what could break out of url("..."), so already-encoded
// characters in the URL (%2C, %20, ...) are left alone
const cssUrl = (url) => url.replace(/["\\\n\r]/g, encodeURIComponent);

const Card = (props) => {

    return(
        <article
            className="Card"
            style={props.imageURL
                ? { backgroundImage: `url("${cssUrl(props.imageURL)}")` }
                : undefined}
        >
            <div className="cardActions">
                <Link
                    className="cardAction"
                    to={'/creator/' + props.id}
                    aria-label={'View ' + props.name}
                >
                    <img src={infoIcon} alt="" />
                </Link>
                <Link
                    className="cardAction"
                    to={'/edit/' + props.id}
                    aria-label={'Edit ' + props.name}
                >
                    <img src={editIcon} alt="" />
                </Link>
            </div>
            <div className="cardBody">
                <h2 className="name">{props.name}</h2>
                {props.url &&
                    <a
                        className="url"
                        href={fullUrl(props.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {prettyUrl(props.url)}
                    </a>
                }
                <p className="description">{props.description}</p>
            </div>
        </article>
    );
};

export default Card;
