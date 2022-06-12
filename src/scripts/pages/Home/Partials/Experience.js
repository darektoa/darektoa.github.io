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
                <div className="my-6 flex items-center">
                    <h2 className="text-3xl font-bold text-[#0077B6]"># EXPERIENCES</h2>
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
        <div className="relative mb-6 pl-8">
            <i className="icon-check-blue text-lg absolute top-1 left-0"></i>
            <h3 className="text-lg font-bold leading-tight">{data.title}</h3>
            <small className="block text-sm leading-tight">{data.location}</small>
            <small className="block mb-2 text-sm leading-tight text-[#0077B6]">({data.date})</small>
            <p className="text-base">{data.desc}</p>
        </div>
    );
}

export default Experience;