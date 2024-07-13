import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeVideo,
  ThumbnailImage,
  TitleAndProfiileContainer,
  ProfileImage,
  ContentSection,
  Title,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {title, thumbnailUrl, profilrImageUrl, publishedAt} = videoDetails

  const formattedDate = () => {
    const newDate = formatDistanceToNow(new Date(publishedAt))
    const formatDate = newDate.split(' ')
    const publishedDate = `${formatDate[1]} ${formatDate[2]}`
    return publishedDate
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeVideo>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <TitleAndProfiileContainer>
              <ProfileImage src={profilrImageUrl} alt="channel logo" />
              <ContentSection>
                <Title>{title}</Title>
                <p>{formattedDate} ago</p>
              </ContentSection>
            </TitleAndProfiileContainer>
          </HomeVideo>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoCard
