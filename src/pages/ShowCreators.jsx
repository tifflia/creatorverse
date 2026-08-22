import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

const ShowCreators = () => {

    const [creators, setCreators] = useState([])

    useEffect(() => {
        const fetchCreators = async () => {
            const { data } = await supabase
            .from('creators')
            .select()
            setCreators(data)
        }
        fetchCreators()
    }, [])

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