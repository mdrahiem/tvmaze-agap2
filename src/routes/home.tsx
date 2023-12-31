import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.webp'
import Error from '../components/error'
import HomeCard from '../components/home-card'
import Loader from '../components/loading'
import { useGetShowsListQuery } from '../services/tvmaze'
import { mq } from '../utils/consts'

/**
 * Renders home page
 * @returns Home component
 */
const Home: React.FC = () => {
  const { data, error, isLoading } = useGetShowsListQuery('powerpuff girls')
  return (
    <div className="App">
      {error ? (
        <Error>Sorry...</Error>
      ) : isLoading ? (
        <Loader text="Loading..." />
      ) : (
        <>
          <HomeHeader>
            <nav>
              <ul style={{ padding: 0, margin: 0 }}>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Link to="/">
                    <LogoContainer>
                      <img src={Logo} alt="logo" />
                    </LogoContainer>
                  </Link>
                </li>
              </ul>
            </nav>
          </HomeHeader>
          <CardsContainer>
            {data && data.length > 0
              ? data.map(item => (
                  <Link to={`/show/${item?.show?.id}`} style={{ textDecoration: 'none' }} key={item.show.id}>
                    <HomeCard title={item?.show?.name} imgUrl={item?.show?.image?.original} />
                  </Link>
                ))
              : null}
          </CardsContainer>
        </>
      )}
    </div>
  )
}

const HomeHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const CardsContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  [mq[0]]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))'
  },
  [mq[1]]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
  },
  gridGap: '1rem'
})

const LogoContainer = styled.div({
  width: '300px',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    height: 'auto'
  },
  [mq[0]]: {
    width: '400px',
    height: '300px'
  }
})

export default Home
