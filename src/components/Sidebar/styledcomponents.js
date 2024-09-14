import styled from 'styled-components'

export const SideContainer = styled.div`
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  background-size: cover;
`

export const SideUnOrderList = styled.ul`
  padding-left: 0px;
`

export const SideListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  padding-left: 15px;
`
export const SideIconPara = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 300;
  margin-left: 20px;
`

export const SocialContainer = styled.div`
  padding-left: 15px;
`

export const SideHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
`
export const SideIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`
export const SideIcon = styled.img`
  height: 30px;
  width: 30px;
`

export const SideMessage = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
`
