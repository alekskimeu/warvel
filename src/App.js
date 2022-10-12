import { useState, useEffect } from "react";
import axios from "axios";

import { Character, Footer, Header, Hero } from "./components";

import { characters } from "./data/characters";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

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

	return (
		<Router>
			<div className="relative">
				<div className="min-h-screen pb-20">
					<Header />
					<Hero />
					<div className="container mx-auto grid grid-cols-4 gap-5 py-20">
						{characters.map((character) => (
							<Character key={character.id} character={character} />
						))}
					</div>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
