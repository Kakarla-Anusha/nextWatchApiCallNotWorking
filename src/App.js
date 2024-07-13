import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import Login from './components/Login'

import Home from './components/Home'

import TrendingVideos from './components/TrendingVideos'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, activeTab: 'Home'}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {isDarkTheme, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeActiveTab: this.changeActiveTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={TrendingVideos} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
