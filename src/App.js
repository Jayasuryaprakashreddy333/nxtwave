import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import WebsiteContext from './context'
// Replace your code here
class App extends Component {
  state = {websiteTheme: 'light', activeBar: 'home', saveVideoList: []}

  changeTheme = () => {
    const {websiteTheme} = this.state
    if (websiteTheme === 'light') {
      this.setState({websiteTheme: 'dark'})
    } else {
      this.setState({websiteTheme: 'light'})
    }
  }

  changeBar = value => {
    this.setState({activeBar: value})
  }

  onSaveVideo = obj => {
    const {saveVideoList} = this.state
    const idList = saveVideoList.map(each => each.id)
    if (idList.includes(obj.id)) {
      const newList = saveVideoList.filter(each => each.id !== obj.id)
      this.setState({saveVideoList: newList})
    } else {
      this.setState(prevState => ({
        saveVideoList: [...prevState.saveVideoList, obj],
      }))
    }
  }

  render() {
    const {websiteTheme, activeBar, saveVideoList} = this.state
    console.log(saveVideoList)
    return (
      <WebsiteContext.Provider
        value={{
          websiteTheme,
          changeTheme: this.changeTheme,
          activeBar,
          changeBar: this.changeBar,
          saveVideoList,
          onSaveVideo: this.onSaveVideo,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/trending" component={Trending} />
          <ProtectedRoute path="/gaming" component={Gaming} />
          <ProtectedRoute path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/bad-path" component={NotFound} />
        </Switch>
      </WebsiteContext.Provider>
    )
  }
}

export default App
