import { useState, useEffect } from "react";
import axios from "axios";

import { Character, Loader } from ".";

import { characters } from "../data/characters";

// const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${process.env.REACT_APP_HASH}`;

const Characters = () => {
	// const [characters, setCharacters] = useState([]);

	// useEffect(() => {
	// 	const fetchCharacters = async () => {
	// 		try {
	// 			const response = await axios.get(url);
	// 			setCharacters(response.data.data.results);
	// 		} catch (error) {
	// 			console.log(error.message);
	// 		}
	// 	};

	// 	fetchCharacters();
	// }, [characters]);

	const handleSearch = (e) => {};
	return (
		<section className="px-2 ">
			<div className="container mx-auto pt-10 pb-20 flex flex-col items-center characters">
				<div className="relative bg-white border border-[#cacaca] flex items-center w-full md:w-1/2 lg:w-1/3 rounded-md">
					<input
						type="search"
						placeholder="Search ..."
						onChange={(e) => handleSearch()}
						className="outline-none w-full bg-white py-[.5rem] px-4 rounded-md"
					/>
					<i className="fas fa-search text-[#afafaf] cursor-pointer absolute right-5"></i>
				</div>
				{characters.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3 mt-10 ">
						{characters.map((character) => (
							<Character key={character.id} character={character} />
						))}
					</div>
				) : (
					<div>
						<Loader />
					</div>
				)}
			</div>
		</section>
	);
};

export default Characters;
