import React from 'react'

const CardInfo = (props) => {

    const result = props.result;
    return (result.hasOwnProperty('properties') &&
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="w-100 h-100" alt="" />
                </div>
                <div className="col-6 text-center my-auto">
                    <h1>{result.properties.name}</h1>
                    <p>{result.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardInfo