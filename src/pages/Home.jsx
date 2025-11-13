import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const baseUrl = 'https://www.swapi.tech/api/';

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const getInfoStarWars = async (feature) => {
        try {

			const response = await fetch(baseUrl + feature);
            if (!response.ok) {
                throw Error('Problema al obtener la lista de ' + feature);
            }
            const data = await response.json(); 

            const detailPromises = data.results.map((item) => {
                return fetch(item.url)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('Problema al obtener detalle de ' + item.url);
                        }
                        return res.json();
                    })
                    .then(detailData => {
                        return detailData.result; 
                    });
            });

            const detailedResults = await Promise.all(detailPromises);

            dispatch({ type: 'set_starwars', payload: { feature: feature, results: detailedResults } });

        } catch (e) {
            console.error('Error en la solicitud HTTP: ', e);
        }
    }

	useEffect(() => {
		getInfoStarWars('people');
		getInfoStarWars('vehicles');
		getInfoStarWars('planets');
	}, [])

	function handleAddFavorite (feature, name, uid) {
		const favoritiesList = store.starWars.favorities.map(favorite => favorite.name)
		if (!favoritiesList.includes(name)){
			dispatch({type:'add_favorite', payload:{featureFav:feature, name:name, uid:uid}})

		}

	}

	return (
		<div className="container">
			{Object.entries(store.starWars).map(([feature,results]) => {
				return (feature != 'favorities' &&
					<div key={feature} className="row mt-2">
						<h1 className="text-danger border-bottom">{feature}</h1>
						<div className="row flex-nowrap overflow-x-auto">
							{results.map((result)=>{
								return (
									<Card key={result.uid} feature={feature} result={result} onFavorite={()=>{handleAddFavorite(feature, result.properties.name, result.uid)}} />
								);
							})}

						</div>
					</div>)
			})}
		</div>
	);
}; 