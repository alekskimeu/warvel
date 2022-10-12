import React, { useState } from "react";
import Modal from "./Modal";

const Character = ({ character }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	return (
		<>
			<div
				className="relative cursor-pointer group rounded-lg overflow-hidden drop-shadow-xl transition ease-in-out delay-150 duration-500 hover:drop-shadow-2xl"
				onClick={() => setShow(true)}
			>
				<div className="h-72 overflow-hidden rounded-lg">
					<img
						// src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
						src={character.img}
						alt={character.name}
						className="rounded-lg h-full w-100 object-cover transition ease-in-out delay-150 duration-500 group-hover:scale-110"
					/>
				</div>
				<div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full opacity-0 group-hover:opacity-100 rounded-lg transition ease-in-out delay-150 duration-500 character-info">
					<div className="absolute text-center details">
						<h1 className="text-xl font-semibold mb-2 text-gray-400 transition ease-in-out delay-150 duration-500">
							{character.name}
						</h1>
						<button className="mt-2 bg-[#ec1d24] text-white font-semibold px-3 py-2 rounded-md btn">
							Read more
						</button>
					</div>
				</div>
			</div>
			<Modal
				show={show}
				id={character.id}
				name={character.name}
				description={character.description}
				image={character.img}
				handleClose={handleClose}
			/>
		</>
	);
};

export default Character;
