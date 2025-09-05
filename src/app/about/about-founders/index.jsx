'use client';

import { useState } from 'react';
import FounderProject from './projects';
import FounderModal from './modal';

import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6"
import GridBG from '@/app/components/gridbg';

const iconMap = {
    FaLinkedinIn: <FaLinkedinIn />,
    FaGithub: <FaGithub />,
    FaInstagram: <FaInstagram />,
}

const projects = [
    {
        title: "Sanskar Dubey",
        src: "/images/founders/sanskar.jpg",
        color: "#8C8C8C",
        mainLink: "https://www.linkedin.com/in/sanskardev/",
        
    },
    {
        title: "Shiva Pandey",
        src: "/images/founders/shiva.webp",
        color: "#000000",
        mainLink: "https://shiva-pandey.netlify.app/",
       
    },
    {
        title: "Zaid Sayyed",
        src: "/images/founders/zaid.jpeg",
        color: "#EFE8D3",
        mainLink: "https://www.linkedin.com/in/zaid-sayyed/",
    
    },
    {
        title: "Shreshth Srivastava",
        src: "/images/founders/shreshth.jpg",
        color: "#EFE8D3",
        mainLink: "https://www.linkedin.com/in/hype4shreshth",
    
    },
]

export default function AboutFounders() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (

        <div className="flex items-center justify-center h-full w-full py-16 md:py-20">
            <GridBG />
            <div className="max-w-[1000px] w-full flex flex-col items-center justify-center">
                {

                    projects.map( (project, index) => {

                        return <FounderProject index={index} title={project.title} links={project.links} mainLink={project.mainLink} setModal={setModal} key={index} />

                    })

                }
            </div>
            <FounderModal modal={modal} projects={projects}/>
        </div>
        
    )

}
