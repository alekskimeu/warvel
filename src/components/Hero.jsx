import React from "react";

const Hero = () => {
	return (
		<div className="hero p-3">
			<div className="container mx-auto flex flex-col items-center justify-center content gap-4 p-3">
				<h1 className="font-extrabold text-[#ec1d24] text-center text-2xl md:text-3xl lg:text-4xl uppercase mb-3">
					Zaka Warriors
				</h1>
				<h3 className="text-gray-300 font-semibold text-xl md:text-2xl lg:text-3xl max-w-lg text-center">
					Cause if we can’t protect the Earth, you can be damn sure we’ll avenge
					it.
				</h3>
			</div>
		</div>
	);
};

export default Hero;
