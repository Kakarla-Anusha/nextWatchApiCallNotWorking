import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavBar from '../NavBar'
import ThemeContext from '../../context/ThemeContext'
import FailedView from '../FailedView'
import VideoCard from '../VideoCard'

import {
  TrendingContainer,
  TitleIconContainer,
  TrendingVideoTitle,
  TrendingVideoList,
  TrendingText,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class TrendingVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideos: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(each => (
          <VideoCard key={each.thumbnail_url} videoDetails={each} />
        ))}
      </TrendingVideoList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailedView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <div data-testid="trending">
              <Header />
              <NavBar />
              <TrendingContainer data-testid="trending" bgColor={bgColor}>
                <TrendingVideoTitle>
                  <TitleIconContainer>
                    <HiFire size={25} color="#ff0000" />
                  </TitleIconContainer>
                  <TrendingText color={textColor}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderTrendingVideos()}
              </TrendingContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingVideos
