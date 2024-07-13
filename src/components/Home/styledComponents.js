import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  display:flex;
  align-items:center;
  width:60%;
  height:40px;
  border:1px solid #909090;
  border-radius:3px;
  margin:20px;
`

export const SearchInput = styled.input`
 padding:5px;
 width:100%;
 outline:none;
 border:none;
`

export const SearchIcon = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#f4f4f4;
  width:70px;
  border:none;
`
export const VideoCardList = styled.ul`
 display:flex;
 flex-wrap:wrap;
`
export const NovideosContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justtify-content:center;
`

export const NoVideosHeading = styled.h1`
  color:#231f20;
  font-size:30px;
  font-family:roboto;
  font-weight:700;
`
export const NoVideosText = styled.p`
  color:#64748b;
  font-size:24px;
  font-family:roboto;
  font-weight:700
`
export const NoVideosImage = styled.img`
 height:400px;
 width:400px;
`

export const RetryButton = styled.button`
 background-color:#4f46e5;
 color:#f1f1f1;
 padding-left:16px;
 padding-right:16px;
 padding-top:8px;
 padding-bottom:8px;
 margin-top:12px;`

export const HomeContainer = styled.div`
 padding:15px;
 display:flex;
`
export const ContentShowContainer = styled.div`
 display:flex;
 flex-direction:column;`
