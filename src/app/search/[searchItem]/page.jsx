import MoviesResults from '@/components/MoviesResults';
import React from 'react'
import Image from 'next/image';

export default async function searchPage({ params }) {
    const searchItem = params.searchItem
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchItem}&
        language=en-US&page=1&include_adult=false`
    );

    const data = await res.json();
    const results = data.results

    return (
        <div className="p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-700">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                Search Results for: {searchItem}
            </h1>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {results.map((result) => (
                    <li key={result.id} className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                            alt='Movie Image'
                            width={500}
                            height={300}
                            className='w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300'
                        />
                        <div className="p-4">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-200">
                                {result.title}
                            </h2>
                            <p className="line-clamp-1 text-gray-700 dark:text-gray-300 mt-2">
                                {result.overview}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

        </div>

    )
}
