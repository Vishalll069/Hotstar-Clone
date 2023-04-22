import React from 'react'
import { Movies_TopRating, Movies_Upcoming, Movies_popular, TvShow_popular, TvShow_toprating, TvShow_upcoming } from "../actions/Actiontype"


const initial = {
    PopularMovies: [],
    PopularShow: [],
    TopMovies: [],
    topShow: [],
    UpcomingMovie: [],
    upcomingShow: [],
    Allinone: []
}

export const Moviereducer = (state = initial, action) => {
    switch (action.type) {

        case Movies_popular: {
            return {
                ...state, PopularMovies: action.payload
            }
        }
        case Movies_TopRating: {
            return {
                ...state, TopMovies: action.payload
            }
        }
        case Movies_Upcoming: {
            return {
                ...state, UpcomingMovie: action.payload
            }
        }
        case TvShow_popular: {
            return {
                ...state, PopularShow: action.payload
            }
        }
        case TvShow_toprating: {
            return {
                ...state, topShow: action.payload
            }
        }
        case TvShow_upcoming: {
            return {
                ...state, upcomingShow: action.payload
            }
        }

        default:
            return state;
    }
}
