import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const MovieDetail = (props) => {
    const [movieData, setmovieData] = useState('')

    const movieRecord = {

        id: movieData.id,
        title: movieData.title,
        year: movieData.year,
        rating: movieData.rating,
        poster: movieData.poster
    }

    async function fetchMovieDetail() {

        const res = await axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${props.id}`,
            {
                headers: {
                    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
                    'x-rapidapi-key': '2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6'
                }
            }
        )
        if (res.status !== 200) {

            //error
            return;
        }
        else {

            console.log(res.data)
            setmovieData(res.data)
        }

    }
    return (
        <div>
            <button onClick={fetchMovieDetail}>fetch moviedetail</button>

            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src={movieRecord.poster} alt="Card image cap" />
                <div class="card-body">
                    Name:<h5 class="card-title">{movieRecord.title}</h5>
                    Ratings:<p class="card-text">{movieRecord.rating}</p>
                    Year:<p class="card-text">{movieRecord.year}</p>
                </div>
            </div>
        </div>
    )
}
