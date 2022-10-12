import React from "react";

const Hero = () => {
	return (
		<div className="hero">
			<div className="container mx-auto flex flex-col items-center justify-center content gap-4">
				<h1 className="text-white font-bold text-center text-4xl uppercase">
					Zaka Warriors
				</h1>
				<h3 className="text-gray-300 font-semibold text-2xl max-w-lg text-center">
					Cause if we can’t protect the Earth, you can be damn sure we’ll avenge
					it.
				</h3>
			</div>
		</div>
	);
};

export default Hero;
