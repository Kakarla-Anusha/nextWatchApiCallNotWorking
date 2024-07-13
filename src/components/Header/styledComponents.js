import styled from 'styled-components'

export const HeaderContainer = styled.div`
 background-color:${props => props.bgColor};
 padding:20px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 box-shadow:4px 0px 4px 4px #94a3b8;
`
export const WebsiteLogo = styled.img`
 width:150px;
 height:50px;
`

export const ItemsContainer = styled.div`
 display:flex;
 align-items:center;`

export const ProfileImage = styled.img`
 height:50px;
 width:50px;
 margin-right:10px;`

export const ThemeButton = styled.button`
 background-color:transparent;
 border-width:0px;
 margin-right:10px;`

export const LogoutButton = styled.button`
 color:#4f46e5;
 border:1px solid #4f46e5;
 background-color:transparent;
 padding-left:16px;
 padding-right:16px;
 padding-top:8px;
 padding-bottom:8px;
`
