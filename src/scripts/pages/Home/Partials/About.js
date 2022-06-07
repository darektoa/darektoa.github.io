const About = () => {
	return (
		<section className="
			w-full min-h-[40rem] pb-20 flex justify-center relative
			bg-gradient-to-b from-[rgba(202,240,248,.05)]
			via-[rgba(202,240,248,.5)] to-[rgba(0,180,216,0)]
			before:bg-grid before:w-full before:contents-[' ']
			before:h-full before:absolute before:-z-10
			after:contents-[' '] after:absolute after:-z-10 after:top-48 after:right-14
			after:w-[50%] after:max-w-[48rem] after:pt-[50%] after:bg-gradient-radial-circle 
			after:from-[rgba(143,39,204,0.3)] after:to-[rgba(255,255,255,0)]">
			<div className="container">
				<h1 className="text-3xl font-extrabold text-[#0077B6]">IT'S ME, ABDUL</h1>
				<p>I'm an enthusiastic programmer 🙌</p>
				<p >Visit and find me on:</p>

				<div className="mt-6 mb-10 grid grid-cols-12 grid-rows-4 gap-6">
					<a href="https://github.com/darektoa" className="pt-[100%] relative w-full h-auto bg-gradient-to-b from-[rgba(0,180,216,.75)] to-[rgba(105,48,195,.75)] rounded-2xl flex flex-col justify-center items-center row-span-3 col-span-7">
						<div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
							<i className="icon-github-white text-8xl"></i>
							<p className="p-2 text-2xl text-white">Github</p>
						</div>
					</a>
					<a href="https://instagram.com/abdulftthh" className="relative pt-[100%] w-full bg-[rgba(255,255,255,60)] shadow-sunny shadow-[rgba(118,118,118,0.25)] rounded-2xl flex flex-col justify-center items-center row-span-2 col-span-5">
						<div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
							<i className="icon-instagram-blue text-5xl"></i>
							<p className="p-2 text-sm text-[#0077B6]">Instagram</p>
						</div>
					</a>
					<a href="https://linkedin.com/in/abdulftthh" className="relative pt-[100%] w-full bg-[rgba(255,255,255,60)] shadow-sunny shadow-[rgba(118,118,118,0.25)] rounded-2xl flex flex-col justify-center items-center row-span-2 col-span-5">
						<div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
							<i className="icon-linkedin-blue text-5xl"></i>
							<p className="p-2 text-sm text-[#0077B6]">LinkedIn</p>
						</div>
					</a>
					<a href="https://github.com/darektoa" className="w-full h-full p-3 bg-[rgba(255,255,255,60)] rounded-xl flex justify-center items-center col-span-7 self-end shadow-sunny shadow-[rgba(116,0,184,.25)]">
						<i className="icon-filedown-blue text-2xl"></i>
						<p className="ml-3 text-sm text-[#0077B6] font-bold">Donwload CV</p>
					</a>
				</div>

				<p className="text-[rgba(0,118,182,0.8)] text-center text-sm">I'm a software engineering graduate, let's talk about software. Don't ask any privacy, I really love the privacy 😍</p>
			</div>
		</section>
	);
}

export default About;