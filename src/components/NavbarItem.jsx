'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')    

    return (
        <div>
            <Link 
                href={`/?genre=${param}`} 
                className='dark:text-black hover:text-amber-500 hover:border-b-2 border-amber-500 font-bold dark:hover:border-b-2 dark:border-amber-500 dark:hover:text-amber-500'
                >
                {title}
            </Link>
        </div>
    )
}
