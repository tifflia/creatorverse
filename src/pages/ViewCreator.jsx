import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import './ViewCreator.css'
import { supabase } from '../client'
import { Button } from 'bootstrap'

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
        <div>
            <h2 className="name">{creator.name}</h2>
            <h3 className="url">{creator.url}</h3>
            <p className="description">{creator.description}</p>
            <img className="image" src={creator.imageURL} alt={creator.name} />
            <div>
                <Link to={'/edit/' + id}><button className="editButton">Edit</button></Link>
                <button className="deleteButton" onClick={deleteCreator}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ViewCreator;