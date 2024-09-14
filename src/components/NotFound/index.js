import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundImg,
  NotFoundPara,
} from './styledcomponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundPara>
      we are sorry, the page you requested could not be found.
    </NotFoundPara>
  </NotFoundContainer>
)

export default NotFound
