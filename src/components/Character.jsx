import React, { useState } from "react";
import Modal from "./Modal";

const Character = ({ character }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	return (
		<>
			<div
				className="cursor-pointer group border border-white rounded-xl mb-5 bg-white hover:border-gray-300 drop-shadow-xl transition ease-in-out delay-150 duration-500 hover:drop-shadow-2xl"
				onClick={() => setShow(true)}
			>
				<div className="h-72 overflow-hidden rounded-t-xl">
					<img
						// src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
						src={character.img}
						alt={character.name}
						className="rounded-t-xl h-full w-full object-cover transition ease-in-out delay-150 duration-500 hover:scale-110"
					/>
				</div>
				<div className="px-4 py-5 transition ease-in-out delay-150 duration-500 group-hover:bg-[#25262a] rounded-b-xl">
					<h1 className="text-lg font-semibold mb-2 group-hover:text-white transition ease-in-out delay-150 duration-500">
						{character.name}
					</h1>
					<p className="text-gray-700 text-xl line-clamp-2 description group-hover:text-white transition ease-in-out delay-150 duration-500">
						{character.description}...
					</p>
				</div>
			</div>
			<Modal
				show={show}
				name={character.name}
				description={character.description}
				image={character.img}
				handleClose={handleClose}
			/>
		</>
	);
};

export default Character;
