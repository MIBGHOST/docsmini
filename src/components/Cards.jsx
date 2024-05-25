import React from 'react'
import { FaFileCode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Cards({data, reference}) {
  return (
    <motion.div 
    drag dragConstraints={reference} 
    whileDrag={{scale:1.2}} 
    dragElastic={0.1}
    dragTransition={{bounceStiffness: 50, bounceDamping: 10}}  
    className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 px-5 py-10 text-white overflow-hidden'>
        <FaFileCode />
         <p className='text-sm leading-tight mt-5 font-semibold text-white'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-5 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseOutline size='.8em' color='#000'/> : <FaDownload size='.8em' color='#000'/> }
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-green-900"} flex item-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )}
        </div>
    </motion.div>
  )
}

export default Cards