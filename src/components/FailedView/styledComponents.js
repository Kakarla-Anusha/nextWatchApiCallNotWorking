import styled from 'styled-components'

export const FailureView = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768pxx) {
    width: 450px;
  }
`
export const FailureHeading = styled.h1`
  font-size: 23px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => props.headingColor};
`
export const FailureNote = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => props.noteColor};
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 4px;
  color: #ffffff;
  padding: 5px 10px 5px 10px;
  font-size: 16px;
  font-family: 'Roboto';
`
