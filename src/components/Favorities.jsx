import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { Link } from 'react-router-dom'

const Favorities = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <>
            {/* Example single danger button */}
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favorities {store.starWars.favorities && store.starWars.favorities.length}
                </button>
                <ul className="dropdown-menu">
                    {store.starWars.favorities.length > 0 ? store.starWars.favorities.map(
                        (favorite) => {
                            return (
                                <li key={favorite.name}>
                                    <Link to={`/details`}> <a className="dropdown-item" href="#">
                                        {favorite.name}
                                    </a></Link> 
                                </li>)
                        }

                    ) : <li>
                        <a className="dropdown-item" href="#">
                            (empty)
                        </a>
                    </li>}
                </ul>
            </div>
        </>

    )
}

export default Favorities