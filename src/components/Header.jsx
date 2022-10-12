import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../data/links";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

	const hideMobileMenu = () => showMobileMenu && setShowMobileMenu(false);

	const iconClassName = showMobileMenu
		? "fas fa-close fa-2x"
		: "fas fa-bars fa-2x";

	const right = showMobileMenu ? "0" : "100%";

	return (
		<header className="fixed top-0 z-10 w-full h-20 bg-current">
			<div className="container mx-auto h-full flex justify-between items-center gap-10">
				<Link
					to="/"
					className="text-xl md:text-2xl lg:text-3xl px-5 rounded-sm font-extrabold bg-[#ec1d24] text-white h-full w-100 flex items-center"
					onClick={() => hideMobileMenu()}
				>
					ZAKA
				</Link>
				<nav
					className={`flex flex-col absolute right-[${right}] top-20 bg-current p-3 w-full h-screen justify-center items-center gap-10 md:flex-row md:static md:h-full md:justify-end`}
				>
					{links.map((link) => (
						<Link
							key={link.id}
							to={link.url}
							className="text-gray-300 font-semibold text-sm uppercase hover:text-[#ec1d24] transition ease-in-out delay-150 duration-500"
							onClick={() => hideMobileMenu()}
						>
							{link.name}
						</Link>
					))}
				</nav>
				<i
					className={`text-gray-400 cursor-pointer md:hidden ${iconClassName} pr-5 md:pr-2`}
					onClick={() => toggleMobileMenu()}
				></i>
			</div>
		</header>
	);
};

export default Header;
