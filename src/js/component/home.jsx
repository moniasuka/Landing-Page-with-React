import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//import cards from
import {Navbar} from "../component/navbar.jsx";
//import footer from
import {Footer} from "../component/footer.jsx";
//import cards from
import Cards from "./cards.jsx";


//create your first component
const Home = () => {
	return (
		<>

		<Navbar />

		<Cards />
		

		<Footer/>
		</>
	);
};

export default Home;
