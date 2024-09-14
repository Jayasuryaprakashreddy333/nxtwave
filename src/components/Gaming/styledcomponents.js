import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendContainer = styled.div`
  background-color: ${props => props.bgColor};
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
`

export const FailureImg = styled.img`
  height: 300px;
  width: 300px;
`
export const FailurePara = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400;
`

export const FailureMsg = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 300;
`

export const FailureButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TrendBanner = styled.div`
  background-color: ${props => props.bgColor};
  height: 20vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TrendIcon = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-right: 5px;
  margin-left: 40px;
`

export const TrendHeading = styled.div`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
`
export const GameUnOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const GameListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const GameThumbnailImg = styled.img`
  height: 200px;
  width: 120px;
`

export const GameDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 0px;
`

export const Para = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 10px;
  margin-top: 2px;
`
