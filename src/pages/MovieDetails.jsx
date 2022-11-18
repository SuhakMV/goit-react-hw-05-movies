import { fetchGenres } from "api/genresApi";
import { useState } from "react";
import { useEffect } from "react";

const MovieDetails = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function getGenres() {
            try {
                const { data } = await fetchGenres()
                setGenres(data);
                
            } catch (error) {console.log('error')}
        }
    
        getGenres();
        console.log(genres);


    })

    

    


    return (
        <div>

        </div>
    );
  };

  export default MovieDetails;