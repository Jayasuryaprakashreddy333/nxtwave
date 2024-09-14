import styled from 'styled-components'

export const Navbar = styled.nav`
  height: 70px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 8px;
`

export const LogoButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const HeaderLogo = styled.img`
  height: 30px;
  width: 120px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`

export const HeaderProfile = styled.img`
  height: 25px;
  width: 25px;
`
export const HeaderButton = styled.button`
  height: 25px;
  width: 80px;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.color};
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  cursor: pointer;
`

export const ModelPop = styled.div`
  height: 120px;
  width: 300px;
  background-color: #1e293b;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ModelPara = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
`
export const ModelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin-top: 15px;
  margin-bottom: 8px;
`

export const ModelCancel = styled(HeaderButton)`
  background-color: transparent;
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 300;
  border: 1px solid #94a3b8;
  border-radius: 4px;
`
export const ModelConfirm = styled(HeaderButton)`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 300;
  border-width: 0px;
  border-radius: 4px;
`
