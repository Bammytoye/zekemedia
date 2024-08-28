import Link from 'next/link'
import React from 'react'

export default function MenuBar({ title, address, Icon}) {
    return (
        <Link href={address} className='hover:text-gray-700'>
            <Icon className="sm:hidden text-3xl"/>
            <p className="hidden sm:inline text-sm hover:border-b-2 border-gray-700 hover:font-thin font-extrabold">{title}</p>
        </Link>
    )
}
