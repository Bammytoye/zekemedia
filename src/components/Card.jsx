'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ result }) { 
    return (
        <div>
            <Link href={`/movie/${result.id}`}>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${
                        result.backdrop_path || result.poster_path
                    }`} 
                    alt='Movie Image' 
                    width={300}
                    height={300}
                />
            </Link>
        </div>
    );
}
