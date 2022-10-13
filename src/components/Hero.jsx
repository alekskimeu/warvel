import React from "react";

const Hero = () => {
	const handleSearch = (e) => {};

	return (
		<div className="hero">
			<div className="container mx-auto flex flex-col items-center justify-center content gap-4 px-5">
				<h1 className="font-extrabold text-[#ec1d24] text-center text-2xl md:text-3xl lg:text-4xl uppercase mb-3">
					Warvel Characters
				</h1>
				<h3 className="text-gray-300 font-semibold text-xl md:text-2xl lg:text-3xl max-w-3xl text-center">
					Cause if we can&#39;t protect the Earth, you can be damn sure
					we&#39;ll avenge it.
				</h3>
				<div className="relative mt-5 bg-[#fafafa] flex items-center w-full md:w-1/2 lg:w-1/3 rounded-md">
					<i className="fas fa-search text-[#858383] cursor-pointer absolute left-5"></i>
					<input
						type="search"
						placeholder="Search ..."
						onChange={(e) => handleSearch()}
						className="outline-none w-full bg-[#fafafa]  py-[.7rem] px-4 rounded-md pl-12"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
