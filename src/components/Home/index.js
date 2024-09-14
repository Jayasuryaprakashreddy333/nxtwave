import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {BiX} from 'react-icons/bi'

import {IoIosSearch} from 'react-icons/io'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import WebsiteContext from '../../context'

import Header from '../Header'

import Sidebar from '../Sidebar'

import {
  Container,
  HomeContainer,
  BannerContainer,
  ImageContainer,
  WebLogo,
  CrossButton,
  BannerPara,
  BannerButton,
  UnOrderList,
  ThumbnailImg,
  LogoContainer,
  LogoImg,
  InformationContainer,
  TitlePara,
  CountPara,
  ListItem,
  FailureImg,
  FailurePara,
  FailureMsg,
  FailureButton,
  FailureContainer,
  LoaderContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  NoResultContainer,
  NoResultImg,
  NoResultPara,
  NoResultMsg,
} from './styledcomponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    close: true,
    list: '',
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const videosList = await response.json()
      const newList = videosList.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({list: newList, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickCross = () => {
    this.setState(prevState => ({close: !prevState.close}))
  }

  onClickRetry = () => {
    this.componentDidMount()
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideosApi()
  }

  render() {
    const {close, list, apiStatus, searchInput} = this.state

    return (
      <WebsiteContext.Consumer>
        {value => {
          const {websiteTheme} = value
          const renderSuccess = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <HomeContainer
                  bgColor={websiteTheme === 'light' ? '#f9f9f9 ' : '#181818'}
                  data-testid="home"
                >
                  {close && (
                    <BannerContainer data-testid="banner">
                      <ImageContainer>
                        <WebLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CrossButton
                          type="button"
                          onClick={this.onClickCross}
                          data-testid="close"
                        >
                          <BiX style={{fontSize: 20}} />
                        </CrossButton>
                      </ImageContainer>
                      <BannerPara>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerPara>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <SearchContainer
                    bgColor={
                      websiteTheme === 'light' ? 'transparent' : '#383838'
                    }
                    color={websiteTheme === 'light' ? '#909090' : '#383838'}
                  >
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeInput}
                      bgColor={websiteTheme === 'light' ? '#ffffff' : '#181818'}
                      color={websiteTheme === 'light' ? '#909090' : '#383838'}
                    />
                    <SearchButton
                      type="button"
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                    >
                      <IoIosSearch
                        style={{
                          fontSize: 18,
                          color: `${
                            websiteTheme === 'light' ? '#909090' : ' #616e7c'
                          }`,
                        }}
                      />
                    </SearchButton>
                  </SearchContainer>
                  {list.length === 0 ? (
                    <NoResultContainer>
                      <NoResultImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        alt="no videos"
                      />
                      <NoResultPara
                        color={websiteTheme === 'light' ? '#000000' : '#ebebeb'}
                      >
                        No Search results found
                      </NoResultPara>
                      <NoResultMsg
                        color={websiteTheme === 'light' ? '#313131' : '#7e858e'}
                      >
                        Try different key words or remove search filter
                      </NoResultMsg>
                      <FailureButton type="button" onClick={this.onClickRetry}>
                        Retry
                      </FailureButton>
                    </NoResultContainer>
                  ) : (
                    <UnOrderList>
                      {list.map(obj => {
                        const {
                          channel,
                          id,
                          publishedAt,
                          thumbnailUrl,
                          title,
                          viewCount,
                        } = obj
                        const {name, profileImageUrl} = channel
                        console.log(id)
                        return (
                          <Link to={`/videos/:${id}`} key={id}>
                            <ListItem>
                              <ThumbnailImg
                                src={thumbnailUrl}
                                alt="video thumbnail"
                              />
                              <LogoContainer>
                                <LogoImg
                                  src={profileImageUrl}
                                  alt="channel logo"
                                />
                                <InformationContainer>
                                  <TitlePara
                                    color={
                                      websiteTheme === 'light'
                                        ? '#000000'
                                        : '#ebebeb'
                                    }
                                  >
                                    {title}
                                  </TitlePara>
                                  <CountPara
                                    color={
                                      websiteTheme === 'light'
                                        ? '#313131'
                                        : '#7e858e'
                                    }
                                  >
                                    {name}
                                  </CountPara>
                                  <CountPara
                                    color={
                                      websiteTheme === 'light'
                                        ? '#313131'
                                        : '#7e858e'
                                    }
                                  >
                                    {viewCount} .{' '}
                                    {formatDistanceToNow(new Date(publishedAt))}
                                  </CountPara>
                                </InformationContainer>
                              </LogoContainer>
                            </ListItem>
                          </Link>
                        )
                      })}
                    </UnOrderList>
                  )}
                </HomeContainer>
              </Container>
            </>
          )

          const renderProgress = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <HomeContainer
                  bgColor={websiteTheme === 'light' ? '#f9f9f9 ' : '#181818'}
                >
                  {close && (
                    <BannerContainer>
                      <ImageContainer>
                        <WebLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                        />
                        <CrossButton type="button" onClick={this.onClickCross}>
                          <BiX style={{fontSize: 20}} />
                        </CrossButton>
                      </ImageContainer>
                      <BannerPara>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerPara>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <SearchContainer
                    bgColor={
                      websiteTheme === 'light' ? 'transparent' : '#383838'
                    }
                    color={websiteTheme === 'light' ? '#909090' : '#383838'}
                  >
                    <SearchInput
                      type="text"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeInput}
                      bgColor={websiteTheme === 'light' ? '#ffffff' : '#181818'}
                      color={websiteTheme === 'light' ? '#909090' : '#383838'}
                    />
                    <SearchButton type="button" onClick={this.onClickSearch}>
                      <IoIosSearch
                        style={{
                          fontSize: 18,
                          color: `${
                            websiteTheme === 'light' ? '#909090' : ' #616e7c'
                          }`,
                        }}
                      />
                    </SearchButton>
                  </SearchContainer>

                  <LoaderContainer>
                    <div className="loader-container" data-testid="loader">
                      <Loader
                        type="ThreeDots"
                        color={websiteTheme === 'light' ? '#606060' : '#ffffff'}
                        height="50"
                        width="50"
                      />
                    </div>
                  </LoaderContainer>
                </HomeContainer>
              </Container>
            </>
          )

          const renderFailure = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <HomeContainer
                  bgColor={websiteTheme === 'light' ? '#f9f9f9 ' : '#181818'}
                >
                  {close && (
                    <BannerContainer>
                      <ImageContainer>
                        <WebLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                        />
                        <CrossButton type="button" onClick={this.onClickCross}>
                          <BiX style={{fontSize: 20}} />
                        </CrossButton>
                      </ImageContainer>
                      <BannerPara>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerPara>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <SearchContainer
                    bgColor={
                      websiteTheme === 'light' ? 'transparent' : '#383838'
                    }
                    color={websiteTheme === 'light' ? '#909090' : '#383838'}
                  >
                    <SearchInput
                      type="text"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeInput}
                      bgColor={websiteTheme === 'light' ? '#ffffff' : '#181818'}
                      color={websiteTheme === 'light' ? '#909090' : '#383838'}
                    />
                    <SearchButton type="button" onClick={this.onClickSearch}>
                      <IoIosSearch
                        style={{
                          fontSize: 18,
                          color: `${
                            websiteTheme === 'light' ? '#909090' : ' #616e7c'
                          }`,
                        }}
                      />
                    </SearchButton>
                  </SearchContainer>

                  <FailureContainer>
                    <FailureImg
                      src={
                        websiteTheme === 'light'
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png '
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                      }
                      alt="failure view"
                    />
                    <FailurePara
                      color={websiteTheme === 'light' ? '#000000' : '#ebebeb'}
                    >
                      Oops! Something Went Wrong
                    </FailurePara>
                    <FailureMsg
                      color={websiteTheme === 'light' ? '#313131' : '#7e858e'}
                    >
                      We are having some trouble completing your request.
                      <br />
                      Please try again
                    </FailureMsg>
                    <FailureButton type="button" onClick={this.onClickRetry}>
                      Retry
                    </FailureButton>
                  </FailureContainer>
                </HomeContainer>
              </Container>
            </>
          )

          switch (apiStatus) {
            case apiStatusConstants.success:
              return renderSuccess()
            case apiStatusConstants.failure:
              return renderFailure()
            case apiStatusConstants.inProgress:
              return renderProgress()
            default:
              return null
          }
        }}
      </WebsiteContext.Consumer>
    )
  }
}

export default Home
