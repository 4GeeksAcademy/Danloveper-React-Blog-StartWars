import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container">
			<div className="row flex-nowrap overflow-x-auto">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />

			</div>
		</div>
	);
}; 