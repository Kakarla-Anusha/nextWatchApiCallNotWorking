import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 567px) {
    flex-direction: row;
    padding-left: 40px;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 567px) {
    width: 300px;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const TrendingProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 20px;
  @media screen and (min-width: 567px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 567px) {
    margin-top: 0;
    margin-left: 20px;
  }
`
export const TrendingTitle = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const TrendingChannelName = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const TrendingViewsAndDate = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const TrendingDot = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  padding-left: 5px;
  padding-right: 5px;
`
