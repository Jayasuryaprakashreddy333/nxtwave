import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'

import Sidebar from '../Sidebar'

import WebsiteContext from '../../context'

import {
  Container,
  VideoDetailsContainer,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailurePara,
  FailureMsg,
  FailureButton,
  VideoContainer,
  VideoTitle,
  ViewContainer,
  VideoCount,
  ButtonContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  ProfileContainer,
  ProfileImg,
  Description,
  ProfileTitle,
  SubscriberCount,
  ProfileInformation,
} from './styledcomponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoDetail: '', active: ''}

  componentDidMount() {
    this.videoItemDetailsApiUrl()
  }

  videoItemDetailsApiUrl = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const newId = id.slice(1, id.length)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${newId}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const details = await response.json()
      const obj = {videoDetails: details.video_details}
      const {videoDetails} = obj
      const newObj = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }

      this.setState({
        videoDetail: newObj,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickVideoRetry = () => {
    this.videoItemDetailsApiUrl()
  }

  onClickLike = () => {
    const {active} = this.state
    if (active === 'like') {
      this.setState({active: ''})
    } else {
      this.setState({active: 'like'})
    }
  }

  onClickDislike = () => {
    const {active} = this.state
    if (active === 'dislike') {
      this.setState({active: ''})
    } else {
      this.setState({active: 'dislike'})
    }
  }

  render() {
    const {apiStatus, videoDetail, active} = this.state
    console.log(videoDetail)
    const {
      videoUrl,
      title,
      publishedAt,
      viewCount,
      channel,
      description,
    } = videoDetail
    console.log(channel)
    return (
      <WebsiteContext.Consumer>
        {value => {
          const {websiteTheme, onSaveVideo, saveVideoList} = value
          const idList = saveVideoList.map(each => each.id)
          const isPresent = idList.includes(videoDetail.id)

          const onClickSave = () => {
            onSaveVideo(videoDetail)
          }

          const renderSuccessView = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <VideoDetailsContainer
                  bgColor={websiteTheme === 'light' ? '#f9f9f9 ' : '#0f0f0f'}
                >
                  <VideoContainer>
                    <ReactPlayer url={videoUrl} width="100%" height="420px" />
                    <VideoTitle
                      color={websiteTheme === 'light' ? '#000000' : '#ebebeb'}
                    >
                      {title}
                    </VideoTitle>
                    <ViewContainer>
                      <VideoCount
                        color={websiteTheme === 'light' ? '#313131' : '#7e858e'}
                      >
                        {viewCount} .{' '}
                        {formatDistanceToNow(new Date(publishedAt))}
                      </VideoCount>
                      <ButtonContainer>
                        <LikeButton
                          type="button"
                          color={active === 'like' ? '#2563eb' : '#64748b'}
                          onClick={this.onClickLike}
                        >
                          <BiLike style={{fontSize: 15}} />
                          Like
                        </LikeButton>
                        <DisLikeButton
                          type="button"
                          color={active === 'dislike' ? '#2563eb' : '#64748b'}
                          onClick={this.onClickDislike}
                        >
                          <BiDislike style={{fontSize: 15}} />
                          Dislike
                        </DisLikeButton>
                        <SaveButton
                          type="button"
                          color={isPresent ? '#2563eb' : '#64748b'}
                          onClick={onClickSave}
                        >
                          <BiListPlus style={{fontSize: 15}} />

                          {isPresent ? 'Saved' : 'Save'}
                        </SaveButton>
                      </ButtonContainer>
                    </ViewContainer>
                    <hr style={{borderColor: '#64748b', width: '100%'}} />
                    <ProfileContainer>
                      <ProfileImg
                        src={channel.profileImageUrl}
                        alt="channel logo"
                      />
                      <Description>
                        <Description>
                          <ProfileTitle
                            color={
                              websiteTheme === 'light' ? '#000000' : '#ebebeb'
                            }
                          >
                            {channel.name}
                          </ProfileTitle>
                          <SubscriberCount
                            color={
                              websiteTheme === 'light' ? '#313131' : '#7e858e'
                            }
                          >
                            {channel.subscriberCount} subscribers
                          </SubscriberCount>
                        </Description>
                        <ProfileInformation
                          color={
                            websiteTheme === 'light' ? '#000000' : '#ebebeb'
                          }
                        >
                          {description}
                        </ProfileInformation>
                      </Description>
                    </ProfileContainer>
                  </VideoContainer>
                </VideoDetailsContainer>
              </Container>
            </>
          )

          const renderLoadingView = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <VideoDetailsContainer
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
                </VideoDetailsContainer>
              </Container>
            </>
          )

          const renderFailureView = () => (
            <>
              <Header />
              <Container>
                <Sidebar />
                <VideoDetailsContainer
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
                    <FailureButton
                      type="button"
                      onClick={this.onClickVideoRetry}
                    >
                      Retry
                    </FailureButton>
                  </FailureContainer>
                </VideoDetailsContainer>
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

export default VideoItemDetails
