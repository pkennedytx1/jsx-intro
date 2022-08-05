import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

export const initialState = {
    loading: false,
    error: '',
    places: [],
    locationSearch: '',
    search: false,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                locationSearch: '',
                places: action.payload
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case 'UPDATE_LOCATION':
            return {
                ...state,
                locationSearch: action.payload
            }
        case 'UPDATE_LOADING':
            return {
                ...state,
                loading: action.payload,
            }
        case 'UPDATE_SEARCH':
            return {
                ...state,
                search: action.payload,
            }
        default: 
            return state
    }
}

export const DestinationDropdown = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.search) {
            dispatch({ type: 'UPDATE_LOADING', payload: true })
            axios
                .get(`https://nominatim.openstreetmap.org/search.php?city=${state.locationSearch}&format=jsonv2`)
                .then((response) => {
                    dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
                })
                .catch((error) => {
                    console.error(error)
                    dispatch({ type: 'FETCH_ERROR', payload: 'An error occured!'})
                })
        }
        dispatch({
            type: 'UPDATE_SEARCH',
            payload: false,
        })
    }, [state.search])

    return (
        <>
            <label htmlFor='destination-search'>Search for a destination</label>
            <input value={state.locationSearch} onChange={(e) => dispatch({
                type: 'UPDATE_LOCATION',
                payload: e.target.value,
            })} name='destination-search' type='text' />
            <button onClick={() => dispatch({
                type: 'UPDATE_SEARCH',
                payload: true,
            })} >Search</button>
            <label htmlFor='destination-dropdown'>Select your prefered destination</label>
            {state.loading ? 'Loading...' :
                <select disabled={!state.places.length > 0} name='destination-.dropdown'>
                    {state.places?.length > 0 && state.places.map((place) => {
                        return <option key={place.place_id} value={place.display_name}>{place.display_name}</option>
                    })}
                </select>
            }
        </>
    )
}