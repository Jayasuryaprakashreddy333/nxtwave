import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 40vh;
  background-size: cover;
  padding: 10px 20px 0px 20px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const WebLogo = styled.img`
  height: 30px;
  width: 100px;
`
export const CrossButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const BannerPara = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 1.8;
`
export const BannerButton = styled(CrossButton)`
  height: 30px;
  width: 90px;
  color: #000000;
  font-family: 'Roboto';
  font-size: 12px;
  border: 1px #000000 solid;
  margin-top: 20px;
`
export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const ThumbnailImg = styled.img`
  height: 120px;
  width: 220px;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

export const LogoImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitlePara = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0px;
`
export const CountPara = styled(TitlePara)`
  color: ${props => props.color};
  font-size: 15;
  font-weight: 300;
  margin-top: 0px;
`
export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 220px;
  width: 220px;
  margin: 10px 20px 60px 20px;
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
export const SearchContainer = styled.div`
  height: 30px;
  width: 350px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px 20px 20px;
  border: 1px ${props => props.color} solid;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  background-color: ${props => props.bgColor};
  outline: none;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  padding-left: 15px;
  border-width: 0px;
  border: 1px ${props => props.color} solid;
  border-right-width: 2px;
  border-color: ${props => props.color};
  border-style: solid;
  margin-right: 10px;
`
export const SearchButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30px;
`

export const NoResultImg = styled.img`
  height: 200px;
  width: 300px;
`
export const NoResultPara = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 400;
`

export const NoResultMsg = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 300;
`
