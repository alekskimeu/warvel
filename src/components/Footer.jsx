import React from "react";

const Footer = () => {
	return (
		<footer className="absolute bottom-0 w-full border-t-2 border-gray-200 h-20 flex justify-center items-center bg-current">
			<p className="text-gray-300">
				Crazy World &copy; {new Date().getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
