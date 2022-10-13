import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Character, Loader } from ".";

const url = `
    http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${process.env.REACT_APP_HASH}
`;

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const response = await axios.get(url);
				setCharacters(response.data.data.results);
			} catch (error) {
				console.log(error.message);
			}
		};

		fetchCharacters();
	}, [characters]);

	return (
		<section className="px-2 pt-10 pb-20">
			<div className="container mx-auto">
				<div className="flex justify-between items-center gap-2">
					<div>
						<h1 className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-600">
							Warvel Characters
						</h1>
						<p className="text-md md:text-lg text-gray-500 max-w-xl mt-2 font-semibold">
							The city is flying and we&#39;re fighting an army of robots, and I
							have a bow and arrow. None of this makes sense.
						</p>
					</div>
					<Link
						to="/"
						className="hidden md:flex items-center font-semibold border py-2 px-4 rounded-md text-gray-400 border-gray-400 hover:text-white hover:border-[#ec1d24] hover:bg-[#ec1d24] transition ease-in-out delay-150 duration-500"
					>
						See All <i className="fas fa-arrow-right-long text-sm ml-1"></i>
					</Link>
				</div>
				<div className="flex flex-col items-center characters">
					{characters.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3 mt-10 ">
							{characters.map((character) => (
								<Character key={character.id} character={character} />
							))}
						</div>
					) : (
						<Loader />
					)}
				</div>
			</div>
		</section>
	);
};

export default Characters;
