import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

	const hideMobileMenu = () => showMobileMenu && setShowMobileMenu(false);

	const iconClassName = showMobileMenu
		? "fas fa-close fa-2x"
		: "fas fa-bars fa-2x";

	const right = showMobileMenu ? "0" : "-100%";

	return (
		<header className="fixed top-0 z-10 w-full py-2 h-20 bg-current">
			<div className="container mx-auto h-full flex justify-between items-center gap-10 md:px-3">
				<Link
					to="/"
					className="text-2xl pl-5 font-bold text-gray-200"
					onClick={() => hideMobileMenu()}
				>
					Zaka
				</Link>
				<nav
					className={`flex flex-col absolute right-[${right}] top-20 bg-current p-3 w-full h-screen justify-center items-center gap-10 md:flex-row md:static md:h-full md:justify-end`}
				>
					<Link
						to="/"
						className="text-gray-200 font-semibold text-sm uppercase"
						onClick={() => hideMobileMenu()}
					>
						Characters
					</Link>
					<Link
						to="#"
						className="text-gray-200 font-semibold text-sm uppercase"
						onClick={() => hideMobileMenu()}
					>
						Comics
					</Link>
					<Link
						to="#"
						className="text-gray-200 font-semibold text-sm uppercase"
						onClick={() => hideMobileMenu()}
					>
						Shows
					</Link>
					<Link
						to="#"
						className="text-gray-200 font-semibold text-sm uppercase"
						onClick={() => hideMobileMenu()}
					>
						Quotes
					</Link>
				</nav>
				<i
					className={`text-gray-400 cursor-pointer md:hidden ${iconClassName} pr-5`}
					onClick={() => toggleMobileMenu()}
				></i>
			</div>
		</header>
	);
};

export default Header;
