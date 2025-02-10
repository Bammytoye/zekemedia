import Link from 'next/link'
import React from 'react'

export default function MenuBar({ title, address, Icon}) {
    return (
        <Link href={address} className='hover:text-amber-500 '>
            <Icon className="sm:hidden text-3xl"/>
            <p className="hidden sm:inline text-sm hover:border-b-2 text-white border-amber-500 font-extrabold">{title}</p>
        </Link>
    )
}
