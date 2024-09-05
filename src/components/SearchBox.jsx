'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router';

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search/${search}`);
        // window.location.href = `/search?q=${search}`; //refresh the page
    }

    return (
        <form className='flex justify-between gap-4 px-5 max-w-6xl mx-auto mt-4'
            onSubmit={handleSubmit}
        >
            <input
                key="search-input"
                type="text"
                placeholder='Search for movies you want...'
                className='w-full h-11 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 border-b-2 border-r-2 border-gray-300'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                aria-label="Search"
                className='text-amber-500 disabled:text-gray-500 outline-none'
                disabled={search.trim() === ''}
            >
                Search
            </button>
        </form>
    )
}
