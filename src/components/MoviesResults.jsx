import React from 'react';
import Card from './Card';

export default function MoviesResults({ moviesResult }) {
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto px-7 py-4'>
            {
                moviesResult.map((result) => (
                    <Card key={result.id} result={result} />
                ))
            }
        </div> 
    );
}
