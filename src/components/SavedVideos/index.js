import {BiListPlus} from 'react-icons/bi'
import NxtVideosContext from '../../context/NxtVideosContext'
import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'
import Sidebar from '../Sidebar'

import {
  SavedVideosPageMainContainer,
  SavedVideosPageResponsiveContainer,
  SavedVideosContentContainer,
  SavedVideosNoResponseView,
  SavedVideosNoResponseImage,
  SavedVideosNoResponseHeading,
  SavedVideosNoResponseMessage,
  SavedVideosContainer,
  SavedVideosTopSection,
  SavedVideosTitle,
  SavedVideosList,
} from './styledComponents'

const SavedVideos = () => (
  <NxtVideosContext.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value

      const isSavedVideoListEmpty = savedVideosList.length === 0

      const renderNoSavedVideosView = () => (
        <SavedVideosNoResponseView>
          <SavedVideosNoResponseImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            width="100%"
          />
          <SavedVideosNoResponseHeading>
            No Saved videos found
          </SavedVideosNoResponseHeading>
          <SavedVideosNoResponseMessage>
            Save your videos by clicking a button
          </SavedVideosNoResponseMessage>
        </SavedVideosNoResponseView>
      )

      const renderSavedVideosView = () => (
        <SavedVideosContainer>
          <SavedVideosTopSection data-testid="banner">
            <BiListPlus />
            <SavedVideosTitle>Saved Videos</SavedVideosTitle>
          </SavedVideosTopSection>
          <SavedVideosList>
            {savedVideosList.map(eachItem => (
              <TrendingVideoCard key={eachItem.id} videoDetails={eachItem} />
            ))}
          </SavedVideosList>
        </SavedVideosContainer>
      )

      return (
        <SavedVideosPageMainContainer
          data-testid="savedVideos"
          isDarkTheme={isDarkTheme}
        >
          <Header />
          <SavedVideosPageResponsiveContainer>
            <Sidebar />
            <SavedVideosContentContainer isDarkTheme={isDarkTheme}>
              {isSavedVideoListEmpty
                ? renderNoSavedVideosView()
                : renderSavedVideosView()}
            </SavedVideosContentContainer>
          </SavedVideosPageResponsiveContainer>
        </SavedVideosPageMainContainer>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default SavedVideos
