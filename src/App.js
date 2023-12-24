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
  state = {savedVideosList: []}

  addVideoToSavedVideosList = () => {}

  removeVideoFromSavedVideosList = () => {}

  render() {
    const {savedVideosList} = this.state

    return (
      <NxtVideosContext.Provider
        value={{
          savedVideosList,
          addVideoToSavedVideosList: this.addVideoToSavedVideosList,
          removeVideoFromSavedVideosList: this.removeVideoFromSavedVideosList,
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
