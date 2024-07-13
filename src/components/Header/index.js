import {FiSun} from 'react-icons/fi'

import {BsMoon} from 'react-icons/bs'

import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {
  HeaderContainer,
  WebsiteLogo,
  ItemsContainer,
  ProfileImage,
  ThemeButton,
  LogoutButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const themeImgUrl = isDarkTheme ? <FiSun /> : <BsMoon />

      const backgroundColor = isDarkTheme ? '#181818' : '#f9f9f9'

      const classNameForTheme = isDarkTheme ? 'sun' : 'moon'

      const onclickTheme = () => {
        toggleTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={backgroundColor}>
          <WebsiteLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <ItemsContainer>
            <ThemeButton onClick={onclickTheme} className={classNameForTheme}>
              {themeImgUrl}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutButton onClick={onLogout}>Logout</LogoutButton>
          </ItemsContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
