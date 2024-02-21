import React from 'react'
import { FiMoreVertical } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { AiFillCalculator } from "react-icons/ai";




const Header = () => {
    return (
        <div className='  h-10 flex gap-3 justify-end text-white '>
            <AiFillCalculator size={20}/>
            <MdHistory size={20}/>
            <FiMoreVertical size={20}/>
        </div>
    )
}

export default Header;