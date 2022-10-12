import { BrowserRouter as Router } from "react-router-dom";

import { Characters, Footer, Header, Hero } from "./components";

import "./App.css";

const App = () => {
	return (
		<Router>
			<div className="relative ">
				<div className="min-h-screen pb-20">
					<Header />
					<Hero />
					<Characters />
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
