export interface Imovies {
    backdrop_path: string
    title: string
    release_date: string
    overview: string
    id: string
    name: string
    first_air_date: string
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