import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './CreatorForm.css'
import { supabase } from '../client'

const EditCreator = () => {

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

    const handleChange = (event) => {
        const {name, value} = event.target
        setCreator(prev => ({...prev, [name]: value}))
    }

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .update({name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL})
            .eq('id', id);
        window.location = "/";
    }

    const deleteCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .delete()
            .eq('id', id);
        window.location = "/";
    }

    return (
        <div className="CreatorForm">
            <form>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} />
                </div>

                <div className="field">
                    <label htmlFor="url">URL</label>
                    <p className="hint">Provide a link to the creator's website or social media profile.</p>
                    <input type="text" id="url" name="url" value={creator.url} onChange={handleChange} />
                </div>

                <div className="field">
                    <label htmlFor="description">Description</label>
                    <p className="hint">Provide a description of the creator. Who are they? What makes them interesting?</p>
                    <textarea rows="5" id="description" name="description" value={creator.description} onChange={handleChange} />
                </div>

                <div className="field">
                    <label htmlFor="imageURL">Image URL</label>
                    <p className="hint">Provide a link to an image of your creator. Be sure to include the http://</p>
                    <input type="text" id="imageURL" name="imageURL" value={creator.imageURL} onChange={handleChange} />
                </div>

                <div className="formActions">
                    <input type="submit" value="Submit" onClick={updatePost} />
                    <button className="deleteButton" onClick={deleteCreator}>
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditCreator;