import {BiListPlus} from 'react-icons/bi'
import NxtVideosContext from '../../context/NxtVideosContext'
import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'
import Sidebar from '../Sidebar'

import {
  SavedVideosPageMainContainer,
  SavedVideosPageResponsiveContainer,
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
      const {savedVideosList} = value

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
            You can save your videos while watching them
          </SavedVideosNoResponseMessage>
        </SavedVideosNoResponseView>
      )

      const renderSavedVideosView = () => (
        <SavedVideosContainer>
          <SavedVideosTopSection>
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
        <SavedVideosPageMainContainer>
          <Header />
          <SavedVideosPageResponsiveContainer>
            <Sidebar />
            {isSavedVideoListEmpty
              ? renderNoSavedVideosView()
              : renderSavedVideosView()}
          </SavedVideosPageResponsiveContainer>
        </SavedVideosPageMainContainer>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default SavedVideos
