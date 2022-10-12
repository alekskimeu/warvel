import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="fixed top-0 z-10 w-full p-2 h-20 bg-current">
			<div className="container mx-auto h-full flex justify-between items-center gap-10">
				<Link to="/" className="text-2xl font-bold text-gray-200">
					Zaka
				</Link>
				<nav className="flex justify-between gap-10 items-center">
					<Link
						to="/"
						className="text-gray-200 font-semibold text-sm uppercase"
					>
						Characters
					</Link>
					<Link
						to="#"
						className="text-gray-200 font-semibold text-sm uppercase"
					>
						Comics
					</Link>
					<Link
						to="#"
						className="text-gray-200 font-semibold text-sm uppercase"
					>
						Shows
					</Link>
					<Link
						to="#"
						className="text-gray-200 font-semibold text-sm uppercase"
					>
						Quotes
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
