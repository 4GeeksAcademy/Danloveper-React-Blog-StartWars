import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../pages/Home';

const Card = (props) => {
    const result = props.result;

    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="h-70" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{result.properties.name}</h5>
                <p>
                    {props.feature == "people" ?
                    <>
                        Gender: {result.properties.gender}<br />
                        Hair Color: {result.properties.hair_color}<br />
                        Eye-Color: {result.properties.eye_color}<br />
                    </>
                    : props.feature == "vehicles" ?
                    <>
                        Capacity: {result.properties.cargo_capacity}<br />
                        Consumables: {result.properties.consumables}<br />
                        Model: {result.properties.model}<br />
                    </>
                    :
                    <>
                        Population: {result.properties.population}<br />
                        Climate: {result.properties.climate}<br />
                        Orbital Period: {result.properties.orbital_period}<br />
                    </>
                }
                </p>

                <div className="d-flex justify-content-between">
                    <Link to={`/details/${props.feature}/${result.uid}`}>
                        <button type="button" className="btn btn-primary">Learn more!</button>
                    </Link>
                    <button type="button" className="btn btn-outline-warning" onClick={props.onFavorite}><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>

    )
}

export default Card