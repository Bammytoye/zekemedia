import React from 'react';
import Card from './Card';

export default function MoviesResults({ moviesResult }) {
    if (!moviesResult) return <div
                                className="text-lg dark:text-gray-200 text-gray-900 text-center py-10 md:py-16 lg:py-20"
                                >
                                    No results found
                                </div>;

    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto px-7 py-4'>
            {moviesResult.map((result) => (
                <Card key={result.id} result={result} />
            ))}
        </div>
    )    
}
