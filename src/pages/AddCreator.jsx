import {useState } from 'react'
import './CreatorForm.css'
import { supabase } from '../client'

const AddCreator = () => {

    const [creator, setCreator] = useState({name: "", url: "", description: "", imageURL: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCreator(prev => ({...prev, [name]: value}))
    }

    const addCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .insert({name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL})
            .select();
        window.location = "/";
    }

    return (
        <div className="CreatorForm">
            <form>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleChange} />
                </div>

                <div className="field">
                    <label htmlFor="url">URL</label>
                    <p className="hint">Provide a link to the creator's website or social media profile.</p>
                    <input type="text" id="url" name="url" onChange={handleChange} />
                </div>

                <div className="field">
                    <label htmlFor="description">Description</label>
                    <p className="hint">Provide a description of the creator. Who are they? What makes them interesting?</p>
                    <textarea rows="5" id="description" name="description" onChange={handleChange} />
                </div>

                <div className="field">
                    <label htmlFor="imageURL">Image URL</label>
                    <p className="hint">Provide a link to an image of your creator. Be sure to include the http://</p>
                    <input type="text" id="imageURL" name="imageURL" onChange={handleChange} />
                </div>

                <div className="formActions">
                    <input type="submit" value="Submit" onClick={addCreator} />
                </div>
            </form>
        </div>
    );
}

export default AddCreator;