import {Component} from 'react'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {FaFire} from 'react-icons/fa'

import {formatDistanceToNow} from 'date-fns'

import WebsiteContext from '../../context'

import Header from '../Header'

import Sidebar from '../Sidebar'

import {
  Container,
  TrendContainer,
  FailureImg,
  FailurePara,
  FailureMsg,
  FailureButton,
  FailureContainer,
  LoaderContainer,
  TrendBanner,
  TrendIcon,
  TrendHeading,
  UnOrderList,
  ListItem,
  ThumbnailImg,
  Description,
  Heading,
  Para,
} from './styledcomponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, list: []}

  componentDidMount() {
    this.getTrendingVideosApi()
  }

  getTrendingVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = ` https://apis.ccbp.in/videos/trending`
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

  render() {
    const {apiStatus, list} = this.state
    console.log(list)
    return (
      <WebsiteContext.Consumer>
        {value => {
          const {websiteTheme} = value

          const renderSuccessView = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <TrendContainer
                  bgColor={websiteTheme === 'light' ? '#f9f9f9 ' : '#0f0f0f'}
                  data-testid="trending"
                >
                  <TrendBanner
                    bgColor={websiteTheme === 'light' ? '#cbd5e1' : '#212121'}
                  >
                    <TrendIcon
                      bgColor={
                        websiteTheme === 'light' ? '#f9f9f9 ' : '#0f0f0f'
                      }
                    >
                      <FaFire
                        style={{
                          fontSize: 25,
                          color: '#ff0b37',
                          display: 'block',
                        }}
                      />
                    </TrendIcon>
                    <TrendHeading
                      color={websiteTheme === 'light' ? '#000000' : '#ebebeb'}
                    >
                      Trending
                    </TrendHeading>
                  </TrendBanner>
                  <UnOrderList>
                    {list.map(each => {
                      const {
                        id,
                        thumbnailUrl,
                        title,
                        channel,
                        publishedAt,
                        viewCount,
                      } = each
                      const {name} = channel
                      return (
                        <Link to={`/videos/:${id}`} key={id}>
                          <ListItem>
                            <ThumbnailImg
                              src={thumbnailUrl}
                              alt="video thumbnail"
                            />
                            <Description>
                              <Heading
                                color={
                                  websiteTheme === 'light'
                                    ? '#000000'
                                    : '#ebebeb'
                                }
                              >
                                {title}
                              </Heading>
                              <Para
                                color={
                                  websiteTheme === 'light'
                                    ? '#313131'
                                    : '#7e858e'
                                }
                              >
                                {name}
                              </Para>
                              <Para
                                color={
                                  websiteTheme === 'light'
                                    ? '#313131'
                                    : '#7e858e'
                                }
                              >
                                {viewCount} .{' '}
                                {formatDistanceToNow(new Date(publishedAt))}
                              </Para>
                            </Description>
                          </ListItem>
                        </Link>
                      )
                    })}
                  </UnOrderList>
                </TrendContainer>
              </Container>
            </>
          )

          const renderLoadingView = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <TrendContainer
                  bgColor={websiteTheme === 'light' ? '#f9f9f9 ' : '#0f0f0f'}
                >
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
                </TrendContainer>
              </Container>
            </>
          )

          const renderFailureView = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <TrendContainer
                  bgColor={websiteTheme === 'light' ? '#f9f9f9 ' : '#0f0f0f'}
                >
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
                </TrendContainer>
              </Container>
            </>
          )

          switch (apiStatus) {
            case apiStatusConstants.success:
              return renderSuccessView()
            case apiStatusConstants.failure:
              return renderFailureView()
            case apiStatusConstants.inProgress:
              return renderLoadingView()
            default:
              return null
          }
        }}
      </WebsiteContext.Consumer>
    )
  }
}

export default Trending
