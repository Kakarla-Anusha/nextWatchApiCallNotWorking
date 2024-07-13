import {
  FailureView,
  FailureImage,
  FailureHeading,
  FailureNote,
  RetryButton,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const FailedView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureView>
            <FailureImage src={failureImageUrl} alt="failure view" />
            <FailureHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureNote noteColor={noteColor}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailedView
