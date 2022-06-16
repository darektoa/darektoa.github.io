import { useState, useEffect } from "react";
import Footer from "./Footer";
import SkillData from "../../../data/SkillData";

const Skill = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        SkillData.get().then(data => setData(data));
    }, []);

    return (
        <section id="skills" className="min-h-[48rem] pb-6 relative flex justify-center" style={{ backgroundImage: 'linear-gradient(180deg, rgba(202, 240, 248, 0) 0%, rgba(202, 240, 248, 0.5) 13.54%, rgba(116, 0, 184, 0.1) 47.92%, rgba(202, 240, 248, 0.5) 100%)' }}>
            <div className="w-full h-[48rem] absolute bottom-0 bg-grid -z-10"></div>
            <div className="container pt-0 flex flex-wrap justify-between">
                <div className="w-full my-6 flex-shrink-0">
                    <div className="w-full flex items-center md:my-10 xl:max-w-[50%]">
                        <h2 className="text-3xl font-bold text-[#0077B6] sm:text-4xl 2xl:text-5xl"><a href="#skills" className="hover:underline"># SKILLS</a></h2>
                        <div className="ml-4 h-1 flex-grow rounded-xl bg-[#0077B6] shadow shadow-[rgba(0,118,182,0.5)]"></div>
                    </div>
                </div>

                {data.map((item, index) => (
                    <SkillCard key={index} data={item} />
                ))}
                
                <Footer />
            </div>
        </section>
    );
}


const SkillCard = (props) => {
    const { data } = props;

    return (
        <div className="group w-[47.5%] mb-6 pt-[50%] relative flex-shrink-0 items-center rounded-2xl border border-indigo-200 bg-[rgba(255,255,255,.75)] hover:scale-105 transition-transform sm:w-[48%] md:w-[31%] md:pt-[31%] lg:w-[23%] lg:pt-[23%] xl:w-[18%] xl:pt-[18%]">
            <div className="w-full h-full p-4 pb-2 absolute top-0 flex flex-col justify-end items-center sm:pb-4">
                <div className="w-[45%] h-[45%] mb-4 grow bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url('${data.icon}')` }}></div>
                <h3 className="text-base font-bold leading-none xs:text-lg sm:text-xl">{data.name}</h3>
                <p className="text-xs text-center xs:leading-tight xs:text-sm sm:leading-tight sm:text-base"><span className="text-[#0077B6] font-bold motion-safe:group-hover:animate-ping">{data.experience}</span><br/> of Experience </p>
            </div>
        </div>
    );
}

export default Skill;