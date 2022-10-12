import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import { Character, Footer, Header, Hero, Loader } from "./components";

import { characters } from "./data/characters";
import "./App.css";

// const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${process.env.REACT_APP_HASH}`;

const App = () => {
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
		<Router>
			<div className="relative">
				<div className="min-h-screen pb-20">
					<Header />
					<Hero />
					<div className="container mx-auto pt-10 pb-20 px-3 flex flex-col items-center">
						<div className="bg-[#e4e4e4] border-2 flex items-center pr-4 w-full md:w-1/2 lg:w-1/3 rounded-md">
							<input
								type="search"
								placeholder="Search ..."
								onChange={(e) => handleSearch()}
								className="outline-none w-full bg-[#e4e4e4] py-2 px-4 rounded-md"
							/>
							<i className="fas fa-search text-[#afafaf] cursor-pointer"></i>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
							{characters ? (
								characters.map((character) => (
									<Character key={character.id} character={character} />
								))
							) : (
								<Loader />
							)}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
