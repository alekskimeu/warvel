import React from "react";

import loader from "../assets/images/loader.webp";

const Loader = () => {
	return (
		<div className="flex justify-center">
			<img src={loader} alt="Loading..." className="h-40 w-40" />
		</div>
	);
};

export default Loader;
