import NxtVideosContext from '../../context/NxtVideosContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundContentContainer,
  NotFoundPageMainContainer,
  NotFoundPageResponsiveContainer,
  NotFoundView,
  NotFoundImage,
  NotFoundHeading,
  NotFoundMessage,
} from './styledComponents'

const NotFound = () => (
  <NxtVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotFoundPageMainContainer isDarkTheme={isDarkTheme}>
          <Header />
          <NotFoundPageResponsiveContainer>
            <Sidebar />
            <NotFoundContentContainer isDarkTheme={isDarkTheme}>
              <NotFoundView>
                <NotFoundImage src={notFoundImageUrl} alt="not found" />
                <NotFoundHeading isDarkTheme={isDarkTheme}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundMessage isDarkTheme={isDarkTheme}>
                  We are sorry, the page you requested could not be found.
                </NotFoundMessage>
              </NotFoundView>
            </NotFoundContentContainer>
          </NotFoundPageResponsiveContainer>
        </NotFoundPageMainContainer>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default NotFound
