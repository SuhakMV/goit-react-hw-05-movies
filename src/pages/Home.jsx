import fetchPopFilms from "api/genresApi";
import { useState } from "react";

export const Home = () => {
    const [popFilms, setPopFilms] = useState(fetchPopFilms())
    console.log(popFilms);

    return (
        <div>
            <ul>
                {popFilms.map(({ title }) =>
                (<li>
                    <p>{title}</p>
                </li>)
                )}
            </ul>

        </div>
    );
  };