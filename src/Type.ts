export interface Imovies {
    backdrop_path: string
    title: string
    release_date: string
    overview: string
    id: string
    name: string
    first_air_date: string
    vote_average: number
}

export interface ImovieCard {
    movie: Imovies
}

export interface IMovieListing {
    title: string
    fetchUrl: string
    category?: string[]
}

export interface ImovieApi {
    requestPopular: string,
    requestTopRated: string,
    requestTrending: string,
    requestUpcoming: string,
    requestMovie: string,
    requestMovieTheatres: string,
    requestTVseries: string
}


export interface Ivote {
    vote: number
}

export interface IMovieState {
    movies: Imovies[]
}
