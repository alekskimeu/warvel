import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="fixed top-0 z-10 w-full p-2 h-20 bg-current">
			<div className="container mx-auto h-full grid grid-cols-3 items-center gap-20">
				<Link to="/" className="text-2xl font-bold text-gray-200">
					Zaka
				</Link>
				<div className="bg-[#f5f5f5] rounded-md flex items-center pr-4">
					<input
						type="search"
						placeholder="Search ..."
						className="outline-none w-full bg-[#f5f5f5] py-2 px-4 rounded-md"
					/>
					<i className="fas fa-search text-[dark-gray] cursor-pointer"></i>
				</div>
				<nav className="flex justify-between gap-3 items-center">
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
