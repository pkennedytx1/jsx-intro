import axios from "axios"
import React, { useEffect, useReducer } from "react"

const initialState = {
    loading: false,
    error: '',
    places: [],
    locationSearch: '',
    search: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                places: action.payload,
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                places: [],
                error: action.payload,
            }
        case 'UPDATE_LOCATION':
            return {
                ...state,
                locationSearch: action.payload,
            }
        case 'UPDATE_SEARCH':
            return {
                ...state,
                search: action.payload,
            }
        case 'UPDATE_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state
    }
}

export const FetchDestinations  = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.locationSearch !== '' && state.search) {
            dispatch({ type: 'UPDATE_LOADING', payload: true})
            axios
                .get(`https://nominatim.openstreetmap.org/search.php?city=${state.locationSearch}&format=jsonv2`)
                .then((response) => {
                    dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
                })
                .catch((error) => {
                    dispatch({ type: 'FETCH_ERROR', payload: error.message || 'Something went wrong'})
                })
        }
        dispatch({ type: 'UPDATE_SEARCH', payload: false })
    }, [state.search])

    return (
        <>
            <label htmlFor='destination-search'>Search for a destination</label>
            <input value={state.locationSearch || ''} type='text' onChange={(e) => dispatch({ type: 'UPDATE_LOCATION', payload: e.target.value})} />
            <button onClick={() => dispatch({ type: 'UPDATE_SEARCH', payload: true })}>Search</button>
                <>
                    <label htmlFor='destination-select'>Select your preferred destination</label>
                    {state.loading ? 'Loading...' : 
                        <select disabled={!state.places.length > 0} name='destination-select'>
                            {state.places?.length > 0 && state.places.map((place) => {
                                return <option key={place.place_id}>{place.display_name}</option>
                            })}
                        </select>
                    }
                </>
            {state.error && 'An error occured loading the travel options.'}
        </>
    )
}