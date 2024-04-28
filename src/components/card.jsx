import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
function Card({item , reference}) {
  return (
    <motion.div drag dragConstraints = {reference} whileDrag={{scale:1.1}}  className='opacity-77 relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-7 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-4 leading-[1.6]'>{item.desc}</p>
        {/* <input className='text-sm mt-4 leading-[1.6]  text-white w-40' style={{backgroundColor : 'inherit'}}/> */}

        <div className=' footer  absolute left-0 bottom-0 w-full h-15 '>
            <div className='flex items-center justify-between  py-4 px-7 '>
             <h5>{item.size}</h5>
            <span className='h-7 w-7 flex items-center justify-center rounded-full bg-zinc-700 p-1.5'>
                {item.close ? <IoCloseOutline size='1em' color='white' /> : <IoMdDownload size='1em' color='white' /> }
            </span>
            </div>
            {(item.tag.isOpen) && (
                <div className={` flex justify-center pt-2 align-center w-full  h-10 `} style={{backgroundColor : item.tag.tagColor}}  >
                <p className=' text-black  text-[16px] font-semibold'> {item.tag.tagTitle} </p> 
                </div>
            )
        }
            
        </div>
    </motion.div>
  )
}

export default Card

