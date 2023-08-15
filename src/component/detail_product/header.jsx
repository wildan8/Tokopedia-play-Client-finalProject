import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
        <header>
            <div className=' text-lg font-semibold mb-5 hover:text-green-tokopedia'>
                <Link className='flex items-center' to="/thumbnail"> <BsArrowLeftShort size={30}/> Go Back </Link>
            </div>
        </header>
        </>
    )
}

