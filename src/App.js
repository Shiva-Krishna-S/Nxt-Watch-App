import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NxtVideosContext from './context/NxtVideosContext'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    savedVideosList: [],
    likedVideosList: [],
    dislikedVideosList: [],
    isDarkTheme: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

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
    const {
      savedVideosList,
      likedVideosList,
      dislikedVideosList,
      isDarkTheme,
    } = this.state

    return (
      <NxtVideosContext.Provider
        value={{
          savedVideosList,
          likedVideosList,
          dislikedVideosList,
          isDarkTheme,
          addVideoToSavedVideosList: this.addVideoToSavedVideosList,
          removeVideoFromSavedVideosList: this.removeVideoFromSavedVideosList,
          addVideoToLikedVideosList: this.addVideoToLikedVideosList,
          removeVideoFromLikedVideosList: this.removeVideoFromLikedVideosList,
          addVideoToDislikedVideosList: this.addVideoToDislikedVideosList,
          removeVideoFromDislikedVideosList: this
            .removeVideoFromDislikedVideosList,
          onChangeTheme: this.onChangeTheme,
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
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtVideosContext.Provider>
    )
  }
}

export default App
