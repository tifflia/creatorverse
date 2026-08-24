import './NoMatch.css'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div className="NoMatch">
            <h2>Nothing here 🛸</h2>
            <p>That page isn't part of the Creatorverse.</p>
            <Link to="/"><button className="homeButton">Back to all creators</button></Link>
        </div>
    )
}

export default NoMatch;
