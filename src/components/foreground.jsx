import React, { useRef } from 'react'
import Card from './card'
window.React = React

function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
            size : "1mb" ,
            close : true,
            tag: {isOpen : true , tagTitle : "Download Now " , tagColor : 'green'}
        } ,
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
            size : ".7mb" ,
            close : false,
            tag: {isOpen : true , tagTitle : "Download Now " , tagColor : 'pink'}
        },
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
            size : "8kb" ,
            close : true,
            tag: {isOpen : true , tagTitle : "Download Now " , tagColor : 'lightblue'}
        },
        {
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
            size : "19mb" ,
            close : false,
            tag: {isOpen : false , tagTitle : "Download Now " , tagColor : 'pink'}
        }
    ]
  return (
      <div ref={ref} className='fixed w-full z-[3] h-full top-10 left-10 flex gap-7 flex-wrap'>
        {data.map((item)=>(
            <Card item = {item} key={item.size} reference = {ref}/>
        ))}
      </div>
    
    
  )
}

export default Foreground
