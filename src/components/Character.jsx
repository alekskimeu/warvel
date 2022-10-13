import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Modal from "./Modal";

const Character = ({ character }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		AOS.init();
	});

	const handleClose = () => setShow(false);

	return (
		<>
			<div
				className="relative cursor-pointer group rounded-lg overflow-hidden drop-shadow-xl transition ease-in-out delay-150 duration-500 hover:drop-shadow-2xl"
				data-aos="fade-up"
				data-aos-duration="900"
			>
				<div className="h-60 overflow-hidden rounded-lg">
					<img
						src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
						alt={character.name}
						className="rounded-lg h-full w-full object-cover transition ease-in-out delay-150 duration-500 group-hover:scale-110"
					/>
				</div>
				<div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full opacity-0 group-hover:opacity-100 rounded-lg transition ease-in-out delay-150 duration-500 character-info">
					<div className="absolute text-center details w-full">
						<h1 className="text-xl font-semibold mb-2 text-gray-400 transition ease-in-out delay-150 duration-500">
							{character.name}
						</h1>
						<button
							className="mt-2 bg-[#ec1d24] text-white font-semibold px-5 py-2 rounded-md btn"
							onClick={() => setShow(true)}
						>
							View
						</button>
					</div>
				</div>
			</div>
			<Modal
				show={show}
				id={character.id}
				name={character.name}
				description={character.description}
				image={character.thumbnail}
				handleClose={handleClose}
			/>
		</>
	);
};

export default Character;
