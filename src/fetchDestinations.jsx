import axios from "axios"
import React, { useEffect, useReducer } from "react"

const initialState = {
    loading: true,
    error: '',
    places: [],
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
        default:
            return state
    }
}

export const FetchDestinations  = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const options = {
        method: 'POST',
        url: 'https://travel-places.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_PLACES_API_KEY,
          'X-RapidAPI-Host': 'travel-places.p.rapidapi.com'
        },
        data: {"query":`query {
        getPlaces(categories: "CITY", lat: 30.2672, lng:-97.7431, maxDistMeters:1000000) {
          name
        }
      }`}
      };

    useEffect(() => {
        axios
            .request(options)
            .then((response) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data.data.getPlaces })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR', payload: error.message || 'Something went wrong'})
            })
    }, [])
    console.log(state.places);
    return (
        <>
            <label for='destination-select'>Select your preferred destination</label>
            {state.loading ? 'Loading...' : 
                <select name='destination-select'>
                    {state.places?.length > 0 && state.places.map((place) => {
                        return <option>{place.name}</option>
                    })}
                </select>
            }
            {state.error && 'An error occured loading the travel options.'}
        </>
    )
}