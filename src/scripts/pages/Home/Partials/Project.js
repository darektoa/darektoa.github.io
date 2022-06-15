import { useState, useEffect } from 'react';
import ProjectData from '../../../data/ProjectData.js';

const Project = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ProjectData.get().then(data => {setData(data)});
    }, []);

    return (
        <section id="projects" className="pb-20 flex justify-center overflow-hidden">
            <div className="container pt-0 relative md:flex md:flex-wrap md:justify-between">
                <i className="w-80 h-80 absolute top-16 -right-32 bg-gradient-radial-circle from-[rgba(202,240,248,0.5)] to-[rgba(202,240,248,0)] -z-10"></i>
                <i className="w-80 h-80 absolute top-[34rem] -left-32 bg-gradient-radial-circle from-[rgba(117,0,184,0.15)] to-[rgba(117,0,184,0)] -z-10"></i>
                <div className="w-full my-6 flex flex-shrink-0 items-center md:my-10">
                    <h2 className="text-3xl font-bold sm:text-4xl"># PROJECTS</h2>
                    <div className="ml-4 h-1 flex-grow rounded-xl bg-black"></div>
                </div>

                {data.map((item, index) => (
                    <ProjectCard key={index} data={item}/>
                ))}
            </div>
        </section>
    );
}


const ProjectCard = (props) => {
    const { data } = props;

    return (
        <div className="group mb-6 min-h-max md:w-[49%] md:flex-shrink-0">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-sunny shadow-[rgba(118,118,118,0.25)] group-hover:scale-90 transition-transform duration-200">
                <div className='w-full h-48 sm:h-64 md:h-48 border border-solid border-b-[#00B4D8] bg-slate-300 overflow-hidden'>
                    <img src={data.thumbnail || 'https://source.unsplash.com/random/300x300?tech'} alt="Thumbnail" className="w-full h-full mx-auto object-cover group-hover:scale-125 transition-all ease-in group-hover:duration-300" />
                </div>
                <div className="flex justify-between">
                    <div className="w-full h-full min-h-[6rem] p-4 pt-3 flex flex-col">
                        <ul className="mb-1 flex text-sm text-[#00B4D8] xs:text-base sm:text-lg md:text-sm">
                            {data.categories.map((item, index) => (
                                <li key={-index} className="mr-1 xs:mr-2">#{item}</li>
                            ))}
                        </ul>
                        <h3 className="text-lg leading-snug font-bold xs:text-xl sm:text-2xl md:text-lg">{data.title}</h3>
                    </div>
                    <div className="pt-4 pr-4 flex flex-col">
                        {data.source && <a href={data.source}><i className="icon-code text-xl mb-2 sm:mb-3 sm:text-2xl md:text-xl" /></a>}
                        {data.preview && <a href={data.preview}><i className="icon-link text-xl sm:text-2xl md:text-xl" /></a>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;