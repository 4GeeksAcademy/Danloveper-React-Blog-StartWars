import { Link } from "react-router-dom";
import Favorities from "./Favorities";

export const Navbar = () => {




	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" style={{width:'100px', height:'100px'}} alt="Logo StarWars" /></span>
				</Link>
				<div className="ml-auto">
					<Favorities />
				</div>
			</div>
		</nav>
	);
};