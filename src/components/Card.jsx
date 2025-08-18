import React from 'react'

const Card = () => {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="h-70" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Luke Skywaker</h5>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-primary">
                        Learn more!
                    </a>
                    <button type="button" class="btn btn-outline-warning"><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </div>

    )
}

export default Card