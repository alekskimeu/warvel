import axios from "axios";

const url = `
    http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${process.env.REACT_APP_HASH}
`;

export const fetchCharacters = async () => {
	try {
		const response = await axios.get(url);
		return response.data.data.results;
	} catch (error) {
		console.log(error.message);
	}
};
