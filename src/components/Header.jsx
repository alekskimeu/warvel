import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../data/links";

import logo from "../assets/images/logo.png";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [scroll, setScroll] = useState(false);

	const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

	const hideMobileMenu = () => showMobileMenu && setShowMobileMenu(false);

	const iconClassName = showMobileMenu
		? "fas fa-close fa-2x"
		: "fas fa-bars fa-2x";

	const right = showMobileMenu ? "0" : "-100%";
	const display = showMobileMenu ? "flex" : "hidden";
	const background = scroll > 10 ? "black" : "transparent";

	return (
		<header className="fixed top-0 z-10 w-full h-20">
			<div
				className={`container mx-auto h-full flex justify-between items-center gap-10 bg-[${background}]`}
			>
				<Link
					to="/"
					className="flex items-center pl-5 md:pl-0"
					onClick={() => hideMobileMenu()}
				>
					<img
						src={logo}
						alt="Zaka Warriors"
						className="w-12 h-12 md:h-16 md:w-16"
					/>
				</Link>
				<nav
					className={`${display} md:flex flex-col absolute right-[${right}] top-20 w-full h-screen justify-center items-center gap-10 md:flex-row md:static md:h-full md:justify-end`}
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
