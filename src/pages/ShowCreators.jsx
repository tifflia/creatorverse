import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

const ShowCreators = (props) => {

    const [creators, setCreators] = useState([])

    useEffect(() => {
        // fetch the list of creators from Supabase
        setCreators(props.data)
    }, [props]) //placeholder props

    return (
        <div className="ShowCreators">
            {
                creators && creators.length > 0 ?
                [...creators]
                .sort((a, b) => a.id - b.id)
                .map((creator, index) =>
                    <Card
                        key={creator.id}
                        id={creator.id}
                        name={creator.name}
                        url={creator.url}
                        description={creator.description}
                        imageURL={creator.imageURL}
                    />
                ) : <h2>{'No Creators Yet 😞'}</h2>
            }
        </div>
    )
}
export default ShowCreators;