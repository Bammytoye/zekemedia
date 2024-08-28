import React from 'react'
import MenuBar from './MenuBar'
import { TbHomeMove } from "react-icons/tb";
import { IoInformationCircle } from "react-icons/io5";
import Link from 'next/link';


export default function Header() {
    return (
        <div className='flex justify-between items-center px-7 py-5 max-w-6xl mx-auto'>
            <div className="flex space-x-5">
                <MenuBar title="Home" address="/" Icon={TbHomeMove} />
                <MenuBar title="About" address="/about" Icon={IoInformationCircle}/>
            </div>

            <Link href={'/'} className='flex gap-1 items-center cursor-pointer'>
                <span className='text-sm bg-amber-500 hover:bg-black hover:text-white py-1 px-2 rounded-lg hover:font-thin font-extrabold'>Zeke</span>
                <span className='text-sm hidden sm:inline hover:font-thin font-extrabold hover:border-b-2 hover:border-gray-700'>Media</span>
            </Link>
        </div>
    )
}
