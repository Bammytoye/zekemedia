import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
    return (
        <div className='flex mt-[67px] gap-8 justify-center items-center bg-amber-200 dark:bg-gray-300 py-2 cursor-pointer'>
            <NavbarItem title='Trending' param='fetchTrending'/>
            <NavbarItem title='Top Rated' param='fetchTopRated'/>
        </div>
    )
}
