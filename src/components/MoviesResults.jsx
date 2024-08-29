import React from 'react';

export default function MoviesResults({ moviesResult }) {
    return (
        <div>
            {
                moviesResult.map((result) => (
                    <div key={result.id}>
                        <h2>{result.original_title}</h2>
                        {/* <h2>{result.overview}</h2> */}
                    </div>
                ))
            }
        </div> 
    );
}
