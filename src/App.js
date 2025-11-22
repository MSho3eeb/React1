import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css'
import SearchIcon from './search.svg'


//b4dc5043

const API_URL = 'https://www.omdbapi.com?apikey=b4dc5043';



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()

        setMovies(data.Search)
        console.log(data.Search)
    }

    useEffect(() => {
        searchMovie('')
    }, [])

    return (
        <div className = "app">
            <h1>Movies</h1>
            <div className="search">
                <input 
                placeholder="Search For Movies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src="SearchIcon" alt="search" onClick={() => searchMovie(searchTerm)}/>
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))
                        }
                        
                    </div>
                ) : (
                    <div className="empty"> 
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

        </div>
    );

}

export default App;