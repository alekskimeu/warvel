import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Characters, Footer, Header, Hero } from "./components";

import "./App.css";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div className="relative">
					<div className="min-h-screen pb-20">
						<Header />
						<Hero />
						<Characters />
					</div>
					<Footer />
				</div>
			</Router>
		</QueryClientProvider>
	);
};

export default App;
