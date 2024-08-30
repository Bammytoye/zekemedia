'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TfiThumbUp } from "react-icons/tfi";

export default function Card({ result }) { 
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-500 sm:shadow-md rounded-lg sm:border sm:border-slate-500 sm:m-2 transition-shadow duration-200'>
            <Link href={`/movie/${result.id}`}>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${
                        result.backdrop_path || result.poster_path
                    }`} 
                    alt='Movie Image' 
                    width={500}
                    height={300}
                    className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
                />
                <div className="p-2">
                    <h2 className='text-lg font-bold '>{result.title || result.name}</h2>
                    <p className='line-clamp-3 text-sm italic'>{result.overview}</p>
                    <p className='text-sm flex items-center justify-between mt-5'>
                        {result.release_date || result.first_air_date}
                        <span className='flex '>
                            <TfiThumbUp className='h-5 mr-1 ml-3'/>
                            {result.vote_count}
                        </span>
                    </p>
                </div>
            </Link>
        </div>
    );
}
