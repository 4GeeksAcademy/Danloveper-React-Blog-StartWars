import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const result = props.result;

    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="h-70" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/${props.feature}/${result.uid}`}>
                        <button type="button" className="btn btn-primary">Learn more!</button>
                    </Link>
                    <button type="button" className="btn btn-outline-warning"><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>

    )
}

export default Card