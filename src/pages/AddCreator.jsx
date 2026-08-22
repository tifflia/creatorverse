import {useState } from 'react'
import './AddCreator.css'
import { supabase } from '../client'

const AddCreator = () => {

    const [creator, setCreator] = useState({name: "", url: "", description: "", imageURL: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCreator(prev => ({...prev, [name]: value}))
    }

    const createPost = async (event) => {
        //create the creator entry in Supabase
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="url">URL</label><br />
                <p htmlFor="url">Provide a link to the creator's website or social media profile.</p> <br />
                <input type="text" id="url" name="url" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <p htmlFor="description">Provide a description of the creator. Who are they? What makes them interesting?</p> <br />
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange} >
                </textarea>
                <br/>

                <label htmlFor="imageURL">Image URL</label><br />
                <p htmlFor="imageURL">Provide a link to an image of your creator. Be sure to include the http://</p> <br />
                <input type="text" id="imageURL" name="imageURL" onChange={handleChange} /><br />
                <br/>

                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    );
}

export default AddCreator;