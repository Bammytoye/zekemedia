import React from 'react';
import MoviesResults from '@/components/MoviesResults';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  // Simulating a delay before fetching data
    await new Promise(resolve => setTimeout(resolve, 2000)); //2 seconds

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTrending' ? '/movie/top_rated' : '/trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <MoviesResults moviesResult={results} />
    </div>
  );
}
