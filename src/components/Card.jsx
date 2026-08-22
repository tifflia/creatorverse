import './Card.css'
import { supabase } from '../client'
import { Link } from 'react-router-dom';

// name, url, description, imageURL

const Card = (props) => {

    const updateCount = async (event) => {
        event.preventDefault();
        await supabase
          .from('Posts')
          .update({betCount: count + 1})
          .eq('id', props.id);
        setCount((count) => count + 1)
    }

    return(
        <div className="Card">
            <Link to={'edit/' + props.id}>edit</Link>
            <Link to={'creator/' + props.id}><h2 className="name">{props.name}</h2></Link>
            <h3 className="url">{props.url}</h3>
            <p className="description">{props.description}</p>
            <img className="image" src={props.imageURL} alt={props.name} />
        </div>
    );
};

export default Card;