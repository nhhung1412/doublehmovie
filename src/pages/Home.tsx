import { Helmet } from '../components/Helmet'
import { Banner } from '../components/Banner'
import { MovieListing } from '../components/MovieListing'
import { requests } from '../api/requests'
import { Fragment } from 'react'

export const Home = () => {
  return (
    <Helmet title="Home">
      <Fragment>
        <Banner />
        <MovieListing
          title="Phổ biến"
          fetchUrl={requests.requestPopular}
          category={['hàn quốc', 'trung quốc', 'âu mỹ', 'việt nam']}
        />
        <MovieListing
          title="Sắp chiếu"
          fetchUrl={requests.requestUpcoming}
          category={['hành động', 'tình cảm', 'hài hước', 'ma - kinh dị']}
        />
        <MovieListing
          title="Phim chiếu rạp"
          fetchUrl={requests.requestMovieTheatres}
          category={['2022', '2021', '2020', '2019']}
        />
        <MovieListing
          title="Thịnh hành"
          fetchUrl={requests.requestTrending}
          category={['phim lẻ thịnh hành', 'phim bộ thịnh hành']}
        />
        <MovieListing title="Top rated" fetchUrl={requests.requestTopRated} />
      </Fragment>
    </Helmet>
  )
}
