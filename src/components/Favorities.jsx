import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { Link } from 'react-router-dom'

const Favorities = () => {

    const { store, dispatch } = useGlobalReducer()

    function handleDeleteFavorite(favoriteName){
        const favoritiesUpdate = store.starWars.favorities.filter(favorite=> favorite.name != favoriteName)
        dispatch({type:'delete_favorite', payload: favoritiesUpdate });
    }

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
                <ul className="dropdown-menu dropdown-menu-end">
                    {store.starWars.favorities.length > 0 ? store.starWars.favorities.map(
                        (favorite) => {
                            return (
                                <li className="d-flex justify-content-between" key={favorite.name}>
                                    <Link to={`/details/${favorite.featureFav}/${favorite.uid}`}> <button className="dropdown-item" >
                                        {favorite.name}
                                    </button></Link>
                                    <i className="mx-3 my-2 fa-solid fa-trash-can fa-xl" onClick={()=>{handleDeleteFavorite(favorite.name)}}></i>
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