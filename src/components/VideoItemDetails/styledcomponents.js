import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoDetailsContainer = styled.div`
  background-color: ${props => props.bgColor};
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
`
export const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const VideoCount = styled.p`
  color: ${props => props.color};
  font-size: 10;
  font-weight: 300;
  margin-top: 0px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const LikeButton = styled.button`
  color: ${props => props.color};
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const DisLikeButton = styled(LikeButton)`
  color: ${props => props.color};
`
export const SaveButton = styled(DisLikeButton)`
  color: ${props => props.color};
`

export const ButtonPara = styled.p`
  display: inline;
  margin-top: 0px;
  margin-left: 2px;
`

export const HorizontalLine = styled.hr`
  color: #64748b;
  height: 1px;
  border-width: 0px;
  width: 100%;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`
export const ProfileImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ProfileTitle = styled.div`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
`

export const SubscriberCount = styled.p`
  color: ${props => props.color};
  font-size: 10;
  font-weight: 300;
  margin-top: 0px;
`

export const ProfileInformation = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
`
