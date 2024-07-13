import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display:flex;
  flex-direction:column;
  margin-right:15px;
  background-color:${props => props.bgColor};
  padding:20px;
`

export const NavabarItem = styled.div`
  display:flex;
  align-items:center;
  background-color:${props => props.bgColor};
`

export const NavText = styled.p`
  font-family:roboto;
  font-size:16px;
  font-weight:700;
  margin-left:12px;
  color:${props => props.textColor}
`
