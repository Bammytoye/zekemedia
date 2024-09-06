import React from 'react';
import MenuBar from './MenuBar';
import { TbHomeMove } from "react-icons/tb";
import { IoInformationCircle } from "react-icons/io5";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-600 shadow-md z-50">
            <div className='flex justify-between items-center px-7 py-5 max-w-6xl mx-auto dark:text-white'>
                <div className="flex space-x-5">
                    <Link href={'/'} className='flex gap-1 items-center cursor-pointer'>
                        <span className='text-sm bg-amber-500 hover:text-white dark:hover:text-gray-700 py-1 px-2 rounded-lg font-extrabold'>Zeke</span>
                        <span className='text-sm hidden sm:inline font-extrabold hover:text-amber-500 dark:text-amber-500 dark:hover:text-white hover:border-b-2 dark:hover:border-white hover:border-amber-500'>Media</span>
                    </Link>
                    <MenuBar title="Home" address="/" Icon={TbHomeMove} />
                    <MenuBar title="About" address="/about" Icon={IoInformationCircle} />
                    <MenuBar title="Contact Us" address="/contact" Icon={IoInformationCircle} />
                </div>

                <div className='flex gap-4 items-center'>
                    <div>
                        <DarkModeSwitch />
                    </div>
                </div>
            </div>
        </div>
    );
}
