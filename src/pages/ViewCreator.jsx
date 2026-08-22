import {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'
import './ViewCreator.css'
import { supabase } from '../client'
import { Button } from 'bootstrap'

const ViewCreator = () => {

    // const {id} = useParams()
    const [creator, setCreator] = useState({id: null, name: "", url: "", description: "", imageURL: ""})

    // useEffect(() => {
    //     // fetch the creator data from Supabase based on the id from the URL
    // }, [id])

    const deletePost = async (event) => {
        //delete the creator data in Supabase
    }

    return (
        <div>
            <h2 className="name">{creator.name}</h2>
            <h3 className="url">{creator.url}</h3>
            <p className="description">{creator.description}</p>
            <img className="image" src={creator.imageURL} alt={creator.name} />
            <div>
                <button className="editButton">
                    Edit
                </button>
                <button className="deleteButton" onClick={deletePost}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ViewCreator;