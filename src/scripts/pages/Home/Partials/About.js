import CV from '../../../../assets/files/CV-Abdul.pdf';

const About = () => {
	return (
		<section className="
			w-full min-h-[36rem] pb-16 flex justify-center relative
			bg-gradient-to-b from-[rgba(202,240,248,.05)]
			via-[rgba(202,240,248,.5)] to-[rgba(0,180,216,0)] overflow-hidden
			before:bg-grid before:w-full before:contents-[' ']
			before:h-full before:absolute before:-z-10
			after:contents-[' '] after:absolute after:-z-10 after:top-[28%] after:right-[18%]
			after:w-1/2 after:max-w-[30rem] after:pt-[min(50%,30rem)] after:bg-gradient-radial-circle 
			after:from-[rgba(117,0,184,0.5)] after:to-[rgba(117,0,184,0)] motion-safe:after:animate-pulse
			sm:pb-20 lg:min-h-[38rem] lg:box-content lg:after:top-[10%] lg:after:right-[5%] 2xl:pb-24">
			<div className="container h-full flex flex-col items-center lg:pt-368 lg:items-start relative">
				<h1 className="text-3xl font-extrabold text-[#0077B6] xs:text-4xl md:text-5xl lg:mt-36 lg:text-4xl 2xl:text-5xl">IT'S ME, ABDUL</h1>
				<p className="xs:text-xl md:text-2xl lg:text-xl 2xl:text-2xl">I'm an enthusiastic programmer 🙌</p>
				<p className="xs:text-xl md:text-2xl lg:mb-6 lg:text-xl 2xl:mb-10 2xl:text-2xl">Visit and find me on:</p>

				<div className="w-[90%] mt-6 mb-10 grid grid-cols-12 grid-rows-4 gap-6 sm:mt-10 sm:mb-12 md:mb-14 lg:absolute lg:left-0 lg:w-full">
					<a href="https://github.com/darektoa" target="__blank" rel="noopener noreferrer" className="pt-[100%] relative w-full h-auto bg-gradient-to-b from-[rgba(0,180,216,.75)] to-[rgba(105,48,195,.75)] rounded-2xl flex flex-col justify-center items-center row-span-3 col-span-7 md:rounded-3xl lg:w-[12rem] lg:h-[12rem] lg:p-0 lg:absolute lg:top-14 lg:right-60 hover:scale-125 hover:z-20 transition-transform">
						<div className="w-full h-full absolute top-0 flex flex-col justify-center items-center lg:p-4 lg:static">
							<i className="icon-github-white text-8xl xs:text-9xl sm:text-[10rem] md:text-[12rem] lg:text-8xl"></i>
							<p className="p-2 text-2xl text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-3xl">Github</p>
						</div>
					</a>
					<a href="https://instagram.com/abdulftthh" target="__blank" rel="noopener noreferrer" className="relative pt-[100%] w-full bg-[rgba(255,255,255,60)] shadow-sunny shadow-[rgba(118,118,118,0.25)] rounded-2xl flex flex-col justify-center items-center row-span-2 col-span-5 md:rounded-3xl lg:w-[8rem] lg:h-[8rem] lg:absolute lg:top-72 lg:right-56 lg:p-0 hover:scale-125 hover:z-20 transition-transform">
						<div className="w-full h-full absolute top-0 flex flex-col justify-center items-center lg:p-4 lg:static">
							<i className="icon-instagram-blue text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-5xl"></i>
							<p className="p-2 text-sm text-[#0077B6] xs:text-xl sm:text-2xl md:text-3xl lg:text-base">Instagram</p>
						</div>
					</a>
					<a href="https://linkedin.com/in/abdulftthh" target="__blank" rel="noopener noreferrer" className="relative pt-[100%] w-full bg-[rgba(255,255,255,60)] shadow-sunny shadow-[rgba(118,118,118,0.25)] rounded-2xl flex flex-col justify-center items-center row-span-2 col-span-5 md:rounded-3xl lg:w-[10rem] lg:h-[10rem] lg:p-0 lg:absolute lg:top-32 lg:right-10 hover:scale-125 hover:z-20 transition-transform">
						<div className="w-full h-full absolute top-0 flex flex-col justify-center items-center lg:p-4 lg:static">
							<i className="icon-linkedin-blue text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-6xl"></i>
							<p className="p-2 text-sm text-[#0077B6] xs:text-xl sm:text-2xl md:text-3xl lg:text-lg">LinkedIn</p>
						</div>
					</a>
					<a href={CV} download="CV - Abdul" className="w-full h-full p-3 bg-[rgba(255,255,255,60)] rounded-xl flex justify-center items-center col-span-7 self-end shadow-sunny shadow-[rgba(116,0,184,.25)] xs:rounded-2xl md:rounded-3xl lg:w-auto lg:h-auto lg:px-8 lg:py-4 lg:absolute lg:top-96 lg:left-10 lg:hover:px-32 2xl:top-[26rem] transition-[padding]">
						<i className="icon-filedown-blue text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl"></i>
						<p className="ml-3 text-sm text-[#0077B6] font-bold xs:text-lg sm:text-xl md:text-3xl lg:text-xl lg:ml-4 2xl:text-2xl">Download CV</p>
					</a>
				</div>

				<p className="max-w-[80%] text-[rgba(0,118,182,0.8)] text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-left lg:max-w-[26rem] 2xl:max-w-[36rem] 2xl:text-2xl">I'm a software engineering graduate, let's talk about software. Don't ask any privacy, I really love the privacy <span className="inline-block motion-safe:animate-flutter">😍</span></p>
			</div>
		</section>
	);
}

export default About;