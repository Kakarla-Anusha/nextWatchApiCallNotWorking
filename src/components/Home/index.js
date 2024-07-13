import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'

import HomeVideoCard from '../HomeVideoCard'

import FailedView from '../FailedView'

import ThemeContext from '../../context/ThemeContext'

import NavBar from '../NavBar'

import {
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  VideoCardList,
  NovideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosText,
  RetryButton,
  HomeContainer,
  ContentShowContainer,
} from './styledComponents'

import './index.css'

const apiConstants = {
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {homeVideos: [], searchInput: '', apiStatus: apiConstants.intial}

  componentDidMount() {
    this.getAllVideosList()
  }

  getAllVideosList = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = ` https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({homeVideos: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getsearchResults = () => {
    this.getAllVideosList()
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onRetry = () => {
    this.setState({searchInput: ''}, this.getAllVideosList)
  }

  renderVideosView = () => {
    const {homeVideos} = this.state
    const videosLength = homeVideos.length
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

          return videosLength > 0 ? (
            <VideoCardList>
              {homeVideos.map(each => (
                <HomeVideoCard videoDetails={each} key={each.id} />
              ))}
            </VideoCardList>
          ) : (
            <NovideosContainer>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideosHeading headingColor={headingColor}>
                No Search results found
              </NoVideosHeading>
              <NoVideosText noteColor={noteColor}>
                Try different key words or remove search filter
              </NoVideosText>
              <RetryButton type="button" onClick={this.onRetry}>
                Retry
              </RetryButton>
            </NovideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderOfFailureView = () => <FailedView onRetry={this.onRetry} />

  renderOfHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderOfVideosView()
      case apiConstants.failure:
        return this.renderOfFailureView()
      case apiConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HomeContainer>
                <NavBar />
                <ContentShowContainer>
                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      onChange={this.onChangeInput}
                      value={searchInput}
                    />
                    <SearchIcon onClick={this.getsearchResults}>
                      <AiOutlineSearch />
                    </SearchIcon>
                  </SearchInputContainer>
                  {this.renderOfHomeVideos()}
                </ContentShowContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
