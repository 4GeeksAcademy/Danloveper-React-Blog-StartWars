import React from 'react'

const CardInfo = (props) => {

    const result = props.result;
    console.log(result)

    return (result.hasOwnProperty('properties') &&
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="w-100 h-100" alt="" />
                </div>
                <div className="col-6 text-center my-auto">
                    <h1>{result.properties.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam id nesciunt temporibus sequi nam earum accusantium doloribus sint vel consequatur officia quaerat assumenda voluptatem blanditiis, numquam vero aliquid porro?
                    Minima quibusdam iste maxime tenetur! Mollitia enim ratione id atque, quaerat voluptates, sapiente officiis harum nobis explicabo architecto est alias consectetur itaque tempora doloremque, ipsam quam cum perferendis. Quisquam, corporis!
                    Vel repellat veritatis explicabo impedit non sit corrupti modi labore aliquam ipsum numquam nemo ipsam saepe, ipsa vero, dolor eaque fuga! Dicta esse ea temporibus eum sit dolorem expedita pariatur?
                    Nemo non nulla, beatae culpa, excepturi, incidunt dolor consequatur error nostrum repellat quos reiciendis fugit? Aut libero, molestiae odio magnam nobis quia sunt ipsum fugiat recusandae, asperiores labore ea necessitatibus.</p>
                </div>
            </div>
            <div className="row mt-4 border-top border-danger">
                {Object.entries(result.properties).map(([title, description], index) => {
                    if (index < 5) {
                        return (
                            <div className='col text-center text-danger'>
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default CardInfo