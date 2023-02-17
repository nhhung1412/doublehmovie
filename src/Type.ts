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

export interface IMovieDetail extends Imovies {
    poster_path: string
    vote_average: number
    status: string
    genres: Iitem[]
}

interface Iitem {
    name: string
    id: string
}

export interface IMovieListing {
    title: string
    fetchUrl: string
    category?: string[]
    linkUrl: string
}

export interface ImovieApi {
    requestPopular: string,
    requestTopRated: string,
    requestTrending: string,
    requestUpcoming: string,
    requestMovie: string,
    requestMovieTheatres: string,
    requestTVseries: string,
}


export interface Ivote {
    vote: number
}

export interface IMovieState {
    movies: Imovies[]
}

export interface IActor {
    id: string
    profile_path: string
    name: string
    character: string
}




export interface IapiImg {
    originalImage: (imgPath: string) => string
    w500Image: (imgPath: string) => string
}


export interface Ireviews {
    length: number
    author: string
    author_details: IauthorDetail
    content: string
    created_at: string
}

interface IauthorDetail {
    name: string
    username: string
    avatar_path: string
    rating: number
}
