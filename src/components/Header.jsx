import React from 'react'
import MenuBar from './MenuBar'
import { TbHomeMove } from "react-icons/tb";
import { IoInformationCircle } from "react-icons/io5";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';


export default function Header() {
    return (
        <div className='flex justify-between items-center px-7 py-5 max-w-6xl mx-auto dark:text-white'>
            <div className="flex space-x-5">
                <MenuBar title="Home" address="/" Icon={TbHomeMove} />
                <MenuBar title="About" address="/about" Icon={IoInformationCircle}/>
            </div>

            <div className='flex gap-4 items-center'>
                <DarkModeSwitch />
                <Link href={'/'} className='flex gap-1 items-center cursor-pointer'>
                    <span className='text-sm bg-amber-500 hover:text-white dark:hover:text-gray-700 py-1 px-2 rounded-lg font-extrabold'>Zeke</span>
                    <span className='text-sm hidden sm:inline font-extrabold hover:text-amber-500 dark:text-amber-500 dark:hover:text-white hover:border-b-2 dark:hover:border-white hover:border-amber-500'>Media</span>
                </Link>
            </div>
        </div>
    )
}
