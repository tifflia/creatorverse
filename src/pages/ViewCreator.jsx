import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import './ViewCreator.css'
import { supabase } from '../client'
import { prettyUrl, fullUrl } from '../urls'

const ViewCreator = () => {

    const {id} = useParams()
    const [creator, setCreator] = useState({id: null, name: "", url: "", description: "", imageURL: ""})

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single()
            if (data) {
                setCreator(data)
            }
        }
        fetchCreator()
    }, [id])

    const deleteCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .delete()
            .eq('id', id);
        window.location = "/";
    }

    return (
        <div className="ViewCreator">
            <div className="creatorPanel">
                {creator.imageURL &&
                    <img className="image" src={creator.imageURL} alt={creator.name} />
                }
                <div className="creatorInfo">
                    <h2 className="name">{creator.name}</h2>
                    {creator.url &&
                        <a
                            className="url"
                            href={fullUrl(creator.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {prettyUrl(creator.url)}
                        </a>
                    }
                    <p className="description">{creator.description}</p>
                </div>
            </div>
            <div className="creatorActions">
                <Link to={'/edit/' + id}><button className="editButton">Edit</button></Link>
                <button className="deleteButton" onClick={deleteCreator}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ViewCreator;