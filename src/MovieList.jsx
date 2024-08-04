import { useState } from "react";
import './styles.css'

const MovieList = () => {

    const [movies, setDisplay] = useState([{
            id: 1, title: "Jaws", desc: "a shark movie", genre: "thriller", display: false},
        {
            id: 2, title: "Alien", desc: "an alien movie", genre: "horror", display: false},
        {
            id: 3, title: "Fast & Furious", desc: "fast cars", genre: "action", display: false},
        {
            id: 4, title: "007: Valkyrie", desc: "could possibly be a non-existant James Bond movie. I did not check", genre: "action", display: false
        }
        ]
    )
    const [showAction, setShowAction] = useState(false);

    const handleClick = (id) => {
        const newMovies = movies.map((movie) => {
            if (movie.id === id) {
                const newMovie = {
                    ...movie,
                    display: !(movie.display)
                }
                return newMovie;
            } else {
                return movie;
            }
        });
        setDisplay(newMovies);
    }

    const handleGenreShow = () => {
        setShowAction(!showAction)
    }

    return (
        <div>
            {!showAction ? (
                <button onClick={handleGenreShow}>Show Action</button>
            ) : (
                <button onClick={handleGenreShow}>Show All</button>
            )}
            <ul>
                {!showAction ? (movies.map((movie) => (
                    <li key={movie.id}><span onClick={() => handleClick(movie.id)}>{movie.title}</span> 
                        {(movie.display) && <small key={movie.id}>---{movie.desc}</small>}
                        <button onClick={() => {
                            setDisplay(
                                movies.filter(m => m.id !== movie.id)
                            );
                        }}>Remove</button>
                    </li>
                ))
                ) : (movies.filter(m => m.genre === 'action').map(movie => (
                    <li key={movie.id}><span onClick={() => handleClick(movie.id)}>{movie.title}</span> 
                        {(movie.display) && <small key={movie.id}>---{movie.desc}</small>}
                        <button onClick={() => {
                            setDisplay(
                                movies.filter(m => m.id !== movie.id)
                            );
                        }}>Remove</button>
                    </li>
                )))

                }

            </ul>
        </div>
    )
}

export default MovieList;