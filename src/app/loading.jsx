import React from 'react';
import Image from 'next/image'; 

export default function Loading() {
    return (
        <div className='flex justify-center text-center py-40'>
            <Image src="/loading.svg" alt="Loading..." width={100} height={100} />
        </div>
    );
}
