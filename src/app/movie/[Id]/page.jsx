import React from 'react';

export default async function page({ params }) {
    const MovieId = params.id;

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${process.env.API_KEY}`
    );

        const movie = await res.json();
        console.log(movie); 
        
        return (
            <div>
                Page
            </div>
        );
}
