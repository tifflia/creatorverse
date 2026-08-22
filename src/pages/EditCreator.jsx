import {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'
import './EditCreator.css'
import { supabase } from '../client'

const EditCreator = () => {

    // const {id} = useParams()
    const [creator, setCreator] = useState({id: null, name: "", url: "", description: "", imageURL: ""})

    // useEffect(() => {
    //     // fetch the creator data from Supabase based on the id from the URL
    // }, [id])

    const handleChange = (event) => {
        const {name, value} = event.target
        setCreator(prev => ({...prev, [name]: value}))
    }

    const updatePost = async (event) => {
        //update the creator data in Supabase
    }

    const deletePost = async (event) => {
        //delete the creator data in Supabase
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="url">URL</label><br />
                <p htmlFor="url">Provide a link to the creator's website or social media profile.</p> <br />
                <input type="text" id="url" name="url" value={creator.url} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <p htmlFor="description">Provide a description of the creator. Who are they? What makes them interesting?</p> <br />
                <textarea rows="5" cols="50" id="description" name="description" value={creator.description} onChange={handleChange} >
                </textarea>
                <br/>

                <label htmlFor="imageURL">Image URL</label><br />
                <p htmlFor="imageURL">Provide a link to an image of your creator. Be sure to include the http://</p> <br />
                <input type="text" id="imageURL" name="imageURL" value={creator.imageURL} onChange={handleChange} /><br />
                <br/>

                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>
                    Delete
                </button>
            </form>
        </div>
    );
}

export default EditCreator;