import axios from "axios";
import {useState, useEffect} from 'react';
import '../../components/SingleContent/SingleContent'
import SingleContent from "../../components/SingleContent/SingleContent";


function Recentes() {
    const [content, setContent] = useState([]);
    const fetchTrending = async ()=> {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        
        );

       
        setContent(data.results);

    }

    useEffect(() => {
        fetchTrending();
    }, [])
    return (
        <div><span className='pageTitle'>Recentes</span>

        <div className="trending">

        { content && content.map((c) => (   
            <SingleContent 
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
            
            
            />

        ))}
</div>
        </div>
    )
}

export default Recentes
