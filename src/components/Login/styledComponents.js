import styled from 'styled-components'

export const LoginContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
  `

export const FormContainer = styled.form`
  display:flex;
  flex-direction:column;
  padding:20px;
  `

export const LogoImage = styled.img`
  height:50px;
  width:150px;
  margin-bottom:20px;`

export const LabelName = styled.label`
  color: #0f0f0f;
  font-family:'roboto'
  margin-bottom:15px;
  `

export const InputContainer = styled.input`
  width:100%;
  padding:12px;
  border:1px solid #0f0f0f;
  margin-bottom:10px;
  margin-top:5px;`

export const ShowPassword = styled.label`
  color:#0f0f0f;
  font-family:roboto;
  font-size:15px;
  `

export const CheckboxContainer = styled.div`
  display:flex;
  align-items:center;
`
export const ShowPasswordInput = styled.input`
  padding:12px;
  border:1px solid #0f0f0f;`

export const LoginButtton = styled.button`
  background-color:#3b82f6;
  color:#f8fafc;
  padding-left:45%;
  padding-right:45%;
  padding-bottom:16px;
  padding-top:16px;
  margin-top:12px;
  border-width:0px;
`
export const ErrorMsg = styled.p`
  color:#ff0000;
  font-size:20px;
  font-family:roboto;
`
