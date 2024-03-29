import { useState, useEffect } from "react";
import AchivementData from "../../../data/AchievementData.js";

const Achievement = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AchivementData.get().then(data => setData(data));
    },[]);

    return (
        <section id="achievements" className="min-h-[48rem] pb-20 flex justify-center relative bg-gradient-to-b from-[rgba(202,240,248,0.5)] via-[rgba(104,48,195,0.25)] to-[rgba(104,48,195,0)]">
            <div className="w-full h-40 absolute -top-[10rem] bg-wave bg-repeat-x bg-bottom -z-10"></div>
            <div className="w-full h-[48rem] absolute -top-64 bg-grid -z-10"></div>
            <div className="w-full h-[48rem] absolute -bottom-32 bg-grid -z-10"></div>
            <div className="container pt-0 md:flex md:flex-wrap md:justify-between">
                <div className="w-full my-6 flex-shrink-0">
                    <div className="w-full flex items-center md:my-10 xl:max-w-[50%]">
                        <h2 id="projects" className="text-3xl font-bold text-[#0077B6] sm:text-4xl 2xl:text-5xl"><a href="#achievements" className="hover:underline"># ACHIEVEMENTS</a></h2>
                        <div className="ml-4 h-1 flex-grow rounded-xl bg-[#0077B6] shadow shadow-[rgba(0,118,182,0.5)]"></div>
                    </div>
                </div>

                {data.map((item, index) => (
                    <AchievementCard key={index} data={item}/>
                ))}
                
            </div>
        </section>
    );
}


const AchievementCard = (props) => {
    const { data } = props;

    return (
        <div className="group w-full h-10 mb-6 p-1 pt-[30%] pb-[30%] relative flex justify-center items-center rounded-2xl bg-gradient-to-b from-[#00B4D8] to-[#6930C3] overflow-hidden md:w-[48.5%] md:pt-[20%] md:pb-[20%] xl:w-[32%] xl:pt-[10%] xl:pb-[10%]">
            <div className="w-[calc(100%-.5rem)] h-[calc(100%-.5rem)] absolute bg-sky-50 rounded-xl bg-grid"></div>
            <img src={data.thumbnail || 'https://source.unsplash.com/random/300x300?paper'} alt="Thumbnail" className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] absolute object-contain" />
            <h3 className="w-full min-h-[30%] px-6 py-3 flex items-center absolute bottom-0 text-base leading-snug text-white font-bold bg-gradient-to-b from-[rgba(0,180,216,0.75)] to-[rgba(104,48,195,0.75)] group-hover:min-h-full transition-all ease-out duration-300 group-hover:skew-x-12 xs:text-lg sm:text-2xl md:text-base lg:text-xl">{data.title}</h3>
        </div>
    );
}

export default Achievement;