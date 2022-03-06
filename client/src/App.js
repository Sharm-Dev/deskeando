import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
	<Routes>
				<h1> Erin's first change with git checkout command to switch branch</h1>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
