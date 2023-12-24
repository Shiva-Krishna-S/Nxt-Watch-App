import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NxtVideosContext from './context/NxtVideosContext'
import './App.css'

class App extends Component {
  state = {savedVideosList: [], likedVideosList: [], dislikedVideosList: []}

  addVideoToSavedVideosList = videoObject => {
    const {savedVideosList} = this.state
    const isThisVideoAlreadySaved = savedVideosList.find(
      eachItem => eachItem.id === videoObject.id,
    )
    if (!isThisVideoAlreadySaved) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoObject],
      }))
    }
  }

  removeVideoFromSavedVideosList = videoId => {
    const {savedVideosList} = this.state
    const updatedVideosList = savedVideosList.filter(
      eachItem => eachItem.id !== videoId,
    )
    this.setState({savedVideosList: updatedVideosList})
  }

  addVideoToLikedVideosList = videoObject => {
    const {likedVideosList} = this.state
    const isThisVideoAlreadySaved = likedVideosList.find(
      eachItem => eachItem.id === videoObject.id,
    )
    if (!isThisVideoAlreadySaved) {
      this.setState(prevState => ({
        likedVideosList: [...prevState.likedVideosList, videoObject],
      }))
    }
  }

  removeVideoFromLikedVideosList = videoId => {
    const {likedVideosList} = this.state
    const updatedVideosList = likedVideosList.filter(
      eachItem => eachItem.id !== videoId,
    )
    this.setState({likedVideosList: updatedVideosList})
  }

  addVideoToDislikedVideosList = videoObject => {
    const {dislikedVideosList} = this.state
    const isThisVideoAlreadySaved = dislikedVideosList.find(
      eachItem => eachItem.id === videoObject.id,
    )
    if (!isThisVideoAlreadySaved) {
      this.setState(prevState => ({
        dislikedVideosList: [...prevState.dislikedVideosList, videoObject],
      }))
    }
  }

  removeVideoFromDislikedVideosList = videoId => {
    const {dislikedVideosList} = this.state
    const updatedVideosList = dislikedVideosList.filter(
      eachItem => eachItem.id !== videoId,
    )
    this.setState({dislikedVideosList: updatedVideosList})
  }

  render() {
    const {savedVideosList, likedVideosList, dislikedVideosList} = this.state

    return (
      <NxtVideosContext.Provider
        value={{
          savedVideosList,
          likedVideosList,
          dislikedVideosList,
          addVideoToSavedVideosList: this.addVideoToSavedVideosList,
          removeVideoFromSavedVideosList: this.removeVideoFromSavedVideosList,
          addVideoToLikedVideosList: this.addVideoToLikedVideosList,
          removeVideoFromLikedVideosList: this.removeVideoFromLikedVideosList,
          addVideoToDislikedVideosList: this.addVideoToDislikedVideosList,
          removeVideoFromDislikedVideosList: this
            .removeVideoFromDislikedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </NxtVideosContext.Provider>
    )
  }
}

export default App
