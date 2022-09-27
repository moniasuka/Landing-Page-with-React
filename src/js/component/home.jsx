import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Navbar} from "../component/navbar.jsx";

//import navbar from
import Cards from "./cards.jsx";


//create your first component
const Home = () => {
	return (
		<>

		<Navbar />

		<Cards />
		


		</>
	);
};

export default Home;
