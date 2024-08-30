import React from 'react';
import Image from 'next/image';


export default async function page({ params }) {
    const MovieId = params.Id;

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${process.env.API_KEY}`
    );

        const movie = await res.json();
        console.log(movie); 
        
        return (
            <div className='w-full'>
                <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-y-6'>
                    <Image 
                        src={`https://image.tmdb.org/t/p/original/${
                        movie.backdrop_path || movie.poster_path
                    }`}
                        alt=''
                        width={500} 
                        height={300}
                        className='rounded-lg'
                        style={{maxWidth: '100%', height: '100%'}}
                    />
                    <div className='p-3'>
                        <h2 className='text-lg mb-3 font-bold '>{movie.title || movie.name}</h2>
                        <p className='text-lg mb-3 text-justify'>{movie.overview}</p>
                        <p className='mb-3'>
                        <span className='font-semibold mr-1'>Date Released: </span>
                            {movie.release_date || movie.first_air_date}
                        </p>
                        <p className='mb-3'>
                        <span className='font-semibold mr-1'>Rating:</span>
                            {movie.vote_count}
                        </p>
                    </div>
                </div>
            </div>
        );
}
