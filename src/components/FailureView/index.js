import NxtVideosContext from '../../context/NxtVideosContext'

import {
  AllVideosFailureView,
  FailureImage,
  FailureHeading,
  FailureMessage,
  RetryButton,
} from './styledComponents'

const FailureView = props => (
  <NxtVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {onClickRetry} = props
      const failureImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      const onClickRetryButton = () => {
        onClickRetry()
      }

      return (
        <AllVideosFailureView>
          <FailureImage src={failureImageUrl} alt="failure view" />
          <FailureHeading isDarkTheme={isDarkTheme}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureMessage isDarkTheme={isDarkTheme}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureMessage>
          <RetryButton type="button" onClick={onClickRetryButton}>
            Retry
          </RetryButton>
        </AllVideosFailureView>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default FailureView
