import { IapiImg, ImovieApi } from "../Type"


export const API_KEY: string = "80193534f3bdf091de78dd365b967875"

export const requests: ImovieApi = {
    requestPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
    requestTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestTrending: `/trending/all/day?api_key=${API_KEY}`,
    requestUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`,
    requestMovieTheatres: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    requestTVseries: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate`
}


export const apiImg: IapiImg = {
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}



// https://api.themoviedb.org/3/movie/315162/videos?api_key=80193534f3bdf091de78dd365b967875&language=en-US


// https://api.themoviedb.org/3/movie/popular?api_key=80193534f3bdf091de78dd365b967875&language=en-US&page=1

// movie detail
//https://api.themoviedb.org/3/movie/315162?api_key=80193534f3bdf091de78dd365b967875&language=en-US

//https://api.themoviedb.org/3/movie/76600/credits?api_key=80193534f3bdf091de78dd365b967875&language=en-US

//https://api.themoviedb.org/3/movie/615777/reviews?api_key=80193534f3bdf091de78dd365b967875&language=en-US&page=1

//https://api.themoviedb.org/3/movie/505642/videos?api_key=80193534f3bdf091de78dd365b967875&language=en-US

// https://api.themoviedb.org/3/genre/movie/list?api_key=80193534f3bdf091de78dd365b967875&language=en-US

// https://api.themoviedb.org/3/search/movie?api_key=80193534f3bdf091de78dd365b967875&query=Jack+Reacher

// https://api.themoviedb.org/3/movie/505642/credits?api_key=80193534f3bdf091de78dd365b967875&language=en-US