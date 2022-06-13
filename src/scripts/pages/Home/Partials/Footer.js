import duckCool from '../../../../assets/images/duck-cool.webp';

const Footer = () => {
    return (
        <div className="w-full pt-16 flex flex-col items-center">
            <div className="w-32 h-32 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${duckCool})` }}></div>
            <p className="mt-4 mb-2 text-sm xs:text-base xs:mt-5 xs:mb-3">Interested?</p>
            <a href="https://github.com/darektoa" className="mb-16 px-12 py-3 bg-[rgba(255,255,255,60)] rounded-xl flex justify-center items-center shadow-sunny shadow-[rgba(116,0,184,.25)] xs:px-18 xs:py-4 xs:rounded-2xl">
                <i className="icon-filedown-blue text-2xl xs:text-3xl"></i>
                <p className="ml-3 text-sm text-[#0077B6] font-bold xs:text-base">Donwload CV</p>
            </a>
            <p className="text-sm text-[#0077B6] text-center leading-tight">Made with ❤️ Motivated <br/> on my first love, Designed by Me</p>
        </div>
    );
};

export default Footer;