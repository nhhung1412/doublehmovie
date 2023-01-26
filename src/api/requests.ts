interface ImovieApi {
    requestPopular: string,
    requestTopRated: string,
    requestTrending: string,
    requestUpcoming: string,
    requestMovie: string
}

const API_KEY: string = "80193534f3bdf091de78dd365b967875"


export const requests: ImovieApi = {
    requestPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestTrending: `/movie/trending?api_key=${API_KEY}`,
    requestUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    requestMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
}

// https://api.themoviedb.org/3/movie/315162/videos?api_key=80193534f3bdf091de78dd365b967875&language=en-US

// https://api.themoviedb.org/3/movie/315162/watch/providers?api_key=80193534f3bdf091de78dd365b967875