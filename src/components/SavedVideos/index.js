import NxtVideosContext from '../../context/NxtVideosContext'
import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'

const SavedVideos = () => (
  <NxtVideosContext.Consumer>
    {value => {
      const {savedVideosList} = value

      const isSavedVideoListEmpty = savedVideosList.length === 0

      const renderNoSavedVideosView = () => (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            width="100%"
          />
          <h1>No Saved videos found</h1>
          <p>You can save your videos while watching them</p>
        </div>
      )

      const renderSavedVideosView = () => (
        <ul>
          {savedVideosList.map(eachItem => (
            <TrendingVideoCard key={eachItem.id} videoDetails={eachItem} />
          ))}
        </ul>
      )

      return (
        <>
          <Header />
          {isSavedVideoListEmpty
            ? renderNoSavedVideosView()
            : renderSavedVideosView()}
        </>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default SavedVideos
