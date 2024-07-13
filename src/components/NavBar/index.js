import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'

import {FaFire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import {
  NavbarContainer,
  NavabarItem,
  NavText,
  NavLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

class NavBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, activeTab, changeActiveTab} = value

          const activeTabBg = isDarkTheme ? '#212121' : '#f1f1f1'

          const textColor = isDarkTheme ? ' #ffffff' : '#212121'

          const bgColor = isDarkTheme ? '#212121' : '#ffffff'

          const onClcikHome = () => {
            changeActiveTab('Home')
          }

          const onClickTrending = () => {
            changeActiveTab('Trending')
          }

          const onClcikGaming = () => {
            changeActiveTab('Gaming')
          }

          const onClcikSaved = () => {
            changeActiveTab('Saved')
          }

          return (
            <NavbarContainer bgColor={bgColor}>
              <Link to="/">
                <NavabarItem
                  onClick={onClcikHome}
                  bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                >
                  <IoMdHome
                    size={20}
                    color={activeTab === 'Home' ? '#ff0b37' : '#616e7c'}
                  />
                  <NavText textColor={textColor}>Home</NavText>
                </NavabarItem>
              </Link>
              <Link to="/trending">
                <NavabarItem onClick={onClickTrending}>
                  <FaFire
                    size={20}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#616e7c'}
                  />
                  <NavText textColor={textColor}>Trending</NavText>
                </NavabarItem>
              </Link>
              <NavabarItem onClick={onClcikGaming}>
                <SiYoutubegaming
                  size={20}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#616e7c'}
                />
                <NavText textColor={textColor}>Gaming</NavText>
              </NavabarItem>
              <NavabarItem onClick={onClcikSaved}>
                <CgPlayListAdd
                  size={20}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#616e7c'}
                />
                <NavText textColor={textColor}>Saved Videos</NavText>
              </NavabarItem>
            </NavbarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavBar
