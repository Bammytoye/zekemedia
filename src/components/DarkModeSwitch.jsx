'use client'
import React, { useEffect, useState } from 'react'
import { IoInvertModeSharp, IoInvertModeOutline } from "react-icons/io5";
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() =>
        setMounted(true),
        []);

    return (
        <div>
            {mounted && (
                currentTheme === 'dark' ?
                    <IoInvertModeSharp
                        onClick={() => setTheme('light')}
                        className='text-xl cursor-pointer hover:text-amber-500' />
                    :
                    <IoInvertModeOutline
                        onClick={() => setTheme('dark')}
                        className='text-xl cursor-pointer hover:text-amber-500' />
            )}
        </div>

    )
}
