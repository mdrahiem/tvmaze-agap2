import styled from '@emotion/styled'
import bg from '../../assets/bg.webp'

function LayoutComponent({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <LayoutContainer>
      <LayoutInner>{children}</LayoutInner>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div({
  minHeight: '100vh',
  backgroundImage: `url(${bg})`,
  // background: 'linear-gradient(90deg, #02aab0 0%, #00cdac 100%)', // optional gradient background
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  margin: '0 auto',
  padding: 0,
  fontFamily: "'Open Sans', sans-serif"
})

const LayoutInner = styled.div({
  maxWidth: '980px',
  margin: '0 auto',
  padding: '2rem'
})

export default LayoutComponent
