'use client'
import { React, useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className='flex flex-col justify-center items-center mt-52'>
            <h1>Something went wrong. Please try again later...</h1> 
            <button
                className="hover:text-amber-500 italic"
                onClick={() => reset()}>
                Try Again
            </button>
        </div>
    );
}
