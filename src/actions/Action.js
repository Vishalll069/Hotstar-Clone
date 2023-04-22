import axios from "axios"
import { Movies_TopRating, Movies_Upcoming, Movies_popular, TvShow_popular, TvShow_toprating, TvShow_upcoming } from "./Actiontype"

const Moviespop_Success = (payload) => {
    return ({
        type: Movies_popular,
        payload

    })
}
const MoviesTop_Success = (payload) => {
    return ({
        type: Movies_TopRating,
        payload
    })
}
const Movies_upcSuccess = (payload) => {
    return ({
        type: Movies_Upcoming,
        payload
    })
}
const Tvpop_success = (payload) => {
    return ({
        type: TvShow_popular,
        payload
    })
}
const TvTop_success = (payload) => {
    console.log("payload")
    console.log(payload)
    return ({
        type: TvShow_toprating,
        payload
    })

}
const Tvupcmn_Success = (payload) => {
    return ({
        type: TvShow_upcoming,
        payload
    })
}

 export const ActionCalls = () => {
    return function (dispatch) {
        const Popular_Movie = (dispatch) => {
            axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ce0659c825d9b20b83594dba4f3043c8&language=en-US&page=1")
                .then((d) => {
                    console.log(d.data.results)
                    dispatch(Moviespop_Success(d.data.results))
                })
                .catch((er) => {
                    console.log("error in Movies popular" + er)
                })

        }
         const Top_Movies = (dispatch) => {
             axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=ce0659c825d9b20b83594dba4f3043c8&language=en-US&page=1")
                 .then((d) => {
                     console.log(d)
                     dispatch(MoviesTop_Success(d.data.results))
                 })
                 .catch((er) => {
                     console.log("error in Top Movies" + er)
                 })
         }
        const Upcoming_Movies = (dispatch) => {
            axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=ce0659c825d9b20b83594dba4f3043c8&language=en-US&page=1")
                .then((d) => {
                    console.log(d)
                    dispatch(Movies_upcSuccess(d.data.results))
                })
                .catch((er) => {
                    console.log("error in Upcoming Movies " + er)
                })
        }
        const Popular_Shows = (dispatch) => {
            axios.get("https://api.themoviedb.org/3/tv/popular?api_key=ce0659c825d9b20b83594dba4f3043c8&language=en-US&page=1")
                .then((d) => {
                    console.log(d)
                    dispatch(Tvpop_success(d.data.results))
                })
                .catch((er) => {
                    console.log("error in popular Shows " + er)
                })

        }
        const Top_Shows = (dispatch) => {
            axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=ce0659c825d9b20b83594dba4f3043c8&language=en-US&page=1")
                .then((d) => {
                    console.log(d.data.results)
                    dispatch(TvTop_success(d.data.results))
                })
                .catch((er) => {
                    console.log("error in Top Shows " + er)
                })
        }
        const Upcoming_Shows = (dispatch) => {
            axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=ce0659c825d9b20b83594dba4f3043c8&language=en-US&page=1")
                .then((d) => {
                    console.log(d)
                    dispatch(Tvupcmn_Success(d.data.results))
                })
                .catch((er) => {
                    console.log("error in Upcoming Shows " + er)
                })
        }

        Popular_Movie(dispatch);
        Top_Movies(dispatch);
         Upcoming_Movies(dispatch);
         Popular_Shows(dispatch);
         Top_Shows(dispatch);
         Upcoming_Shows(dispatch);

    }
}