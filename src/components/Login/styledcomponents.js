import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.form`
  background-color: #f8fafc;
  height: 350px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 8px 20px 300px #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginLogo = styled.img`
  height: 40px;
  width: 150px;
  margin-bottom: 30px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
`

export const Label = styled.label`
  color: #212121;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
`
export const Input = styled.input`
  height: 35px;
  width: 250px;
  background-color: transparent;
  color: #383838;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 300;
  border: 1px solid #383838;
  border-radius: 4px;
  padding-left: 15px;
  outline: none;
`

export const CheckContainer = styled(InputContainer)`
  flex-direction: row;
  justify-content: flex-start;
  width: 250px;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 0px;
`
export const CheckBox = styled.input`
  background-color: transparent;
  border-width: 1px;
`
export const CheckLabel = styled(Label)`
  color: #231f20;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`
export const Button = styled.button`
  height: 30px;
  width: 250px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 4px;
  border-width: 0px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
`
