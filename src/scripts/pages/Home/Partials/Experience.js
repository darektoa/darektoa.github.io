import { useState, useEffect } from "react";
import ExperienceData from "../../../data/ExperienceData";

const Experience = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ExperienceData.get().then(data => setData(data));
    }, []);

    return (
        <section id="experiences" className="pb-20 flex justify-center">
            <div className="container pt-0">
                <div className="w-full my-6 flex items-center md:my-10">
                    <h2 className="text-3xl font-bold text-[#0077B6] sm:text-4xl"># EXPERIENCES</h2>
                    <div className="ml-4 h-1 flex-grow rounded-xl bg-[#0077B6]"></div>
                </div>

                {data.map((item, index) => (
                    <ExperienceCard key={index} data={item} />
                ))}
                
            </div>
        </section>
    );
}


const ExperienceCard = (props) => {
    const { data } = props;
    
    return (
        <div className="relative mb-6 pl-8 sm:pl-10">
            <i className="icon-check-blue text-lg absolute top-1 left-0 xs:text-xl sm:text-2xl"></i>
            <h3 className="text-lg font-bold leading-tight xs:leading-tight xs:text-xl sm:leading-tight sm:text-2xl">{data.title}</h3>
            <small className="block text-sm leading-tight xs:leading-tight xs:text-base sm:leading-tight sm:text-lg">{data.location}</small>
            <small className="block mb-2 text-sm leading-tight xs:leading-tight text-[#0077B6] xs:mb-3 xs:text-base sm:leading-tight sm:text-lg">({data.date})</small>
            <p className="text-base leading-snug xs:text-lg sm:text-xl">{data.desc}</p>
        </div>
    );
}

export default Experience;