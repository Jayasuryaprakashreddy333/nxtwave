import {Link} from 'react-router-dom'

import {CgPlayListAdd} from 'react-icons/cg'

import {formatDistanceToNow} from 'date-fns'

import WebsiteContext from '../../context'

import Header from '../Header'

import Sidebar from '../Sidebar'

import {
  Container,
  TrendContainer,
  TrendBanner,
  TrendIcon,
  TrendHeading,
  UnOrderList,
  ListItem,
  ThumbnailImg,
  Description,
  Heading,
  Para,
  FailureImg,
  FailurePara,
  FailureMsg,
  FailureContainer,
} from './styledcomponents'

const SavedVideos = () => (
  <WebsiteContext.Consumer>
    {value => {
      const {websiteTheme, saveVideoList} = value
      console.log(saveVideoList)
      return (
        <>
          <Header />
          <Container>
            <Sidebar />
            <TrendContainer
              bgColor={websiteTheme === 'light' ? '#f9f9f9 ' : '#0f0f0f'}
              data-testid="savedVideos"
            >
              {saveVideoList.length !== 0 ? (
                <>
                  <TrendBanner
                    bgColor={websiteTheme === 'light' ? '#cbd5e1' : '#212121'}
                  >
                    <TrendIcon
                      bgColor={
                        websiteTheme === 'light' ? '#f9f9f9 ' : '#0f0f0f'
                      }
                    >
                      <CgPlayListAdd
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
                      Saved Videos
                    </TrendHeading>
                  </TrendBanner>
                  <UnOrderList>
                    {saveVideoList.map(each => {
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
                </>
              ) : (
                <FailureContainer>
                  <FailureImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <FailurePara
                    color={websiteTheme === 'light' ? '#000000' : '#ebebeb'}
                  >
                    No Saved Videos Found
                  </FailurePara>
                  <FailureMsg
                    color={websiteTheme === 'light' ? '#000000' : '#ebebeb'}
                  >
                    You can save your videos while watching them.
                  </FailureMsg>
                </FailureContainer>
              )}
            </TrendContainer>
          </Container>
        </>
      )
    }}
  </WebsiteContext.Consumer>
)

export default SavedVideos
