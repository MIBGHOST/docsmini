import React, { useRef } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            desc: "hello there! myself code file.",
            filesize: ".5mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "hello there! u can upload me.",
            filesize: "1.0mb",
            close: false,
            tag: {isOpen: true, tagTitle: "upload Now", tagColor: "green"},
        },
        {
            desc: "hello there! myself code file and currently i am being downloaded.",
            filesize: ".5mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Downloading...", tagColor: "blue"},
        },
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Cards data={item} reference={ref} />
        ))}
    </div>
  );
}

export default Foreground