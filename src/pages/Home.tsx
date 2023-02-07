import { Helmet } from '../components/Helmet'
import { Banner } from '../components/Banner'
import { MovieListing } from '../components/MovieListing'
import { requests } from '../api/requests'
import { Fragment } from 'react'

export const Home: React.FC = () => {
  return (
    <Helmet title="Home">
      <Fragment>
        <Banner />
        <div className="lg:px-20 md:px-14 px-10 my-10">
          <MovieListing
            title="Phổ biến"
            fetchUrl={requests.requestPopular}
            category={['hàn quốc', 'trung quốc', 'âu mỹ', 'việt nam']}
            linkUrl="/phimle"
          />
          <MovieListing
            title="Sắp chiếu"
            fetchUrl={requests.requestUpcoming}
            category={['hành động', 'tình cảm', 'hài hước', 'ma - kinh dị']}
            linkUrl="/phimle"
          />
          <MovieListing
            title="Phim chiếu rạp"
            fetchUrl={requests.requestMovieTheatres}
            category={['2022', '2021', '2020', '2019']}
            linkUrl="/phimchieurap"
          />
          <MovieListing
            title="Phim lẻ"
            fetchUrl={requests.requestTrending}
            linkUrl="/phimle"
          />
          <MovieListing
            title="Phim bộ"
            fetchUrl={requests.requestTVseries}
            linkUrl="/phimbo"
          />
          <MovieListing
            title="Thịnh hành"
            fetchUrl={requests.requestTopRated}
            category={['phim lẻ thịnh hành', 'phim bộ thịnh hành']}
            linkUrl="/phimle"
          />
        </div>
      </Fragment>
    </Helmet>
  )
}
