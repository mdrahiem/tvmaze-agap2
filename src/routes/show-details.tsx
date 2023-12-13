import styled from '@emotion/styled'
import parse from 'html-react-parser'
import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Error from '../components/error'
import Loader from '../components/loading'
import BackLink from '../components/reusable/back-link'
import { useGetShowDetailsQuery, useGetShowEpisodesQuery } from '../services/tvmaze'
import { mq } from '../utils/consts'

/**
 * Renders show details page
 * @returns Show details component
 */
const ShowDetails: React.FC = () => {
  const { showId } = useParams()
  const { data: showData, error: showDetailsError, isLoading: showDetailsLoading } = useGetShowDetailsQuery(parseInt(showId ?? '0'))
  const { data: showEpisodesData, error: showEpisodesError, isLoading: showEpisodesLoading } = useGetShowEpisodesQuery(parseInt(showId ?? '0'))
  return (
    <div className="App">
      {showDetailsError ?? showEpisodesError ? (
        <Error>Sorry...</Error>
      ) : showDetailsLoading || showEpisodesLoading ? (
        <Loader text="Loading..." />
      ) : (
        <>
          <BackLink link="/">Back to home</BackLink>
          <ShowDetailsContainer>
            <ShowDetailsImage>
              <img src={showData?.image?.original} alt="" />
            </ShowDetailsImage>
            <div>
              <h1 style={{ marginTop: 0 }}>{showData?.name}</h1>
              <div style={{ fontSize: '1.2rem' }}>{parse(showData?.summary ?? '')}</div>
              <Rating>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,235,59,1)">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
                {showData?.rating?.average ?? 'N/A'}
              </Rating>
              <ShowExtraInfo>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px'
                  }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Type:</label>
                    <p>{showData?.type}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Status:</label>
                    <p>{showData?.status}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Genres:</label>
                    <p>{showData?.genres.toString()}</p>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px'
                  }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Runtime:</label>
                    <p>{showData?.averageRuntime}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Language:</label>
                    <p>{showData?.language}</p>
                  </div>
                </div>
              </ShowExtraInfo>
            </div>
          </ShowDetailsContainer>
          <div>
            <h2>Episodes</h2>
            <EpisodesContainer>
              {showEpisodesData?.map((episode, index) => (
                <EpisodeItem key={episode.id}>
                  <Link to={`/${showId}/episode/${episode.id}`} key={episode.id}>
                    {index + 1}. {episode.name}
                  </Link>
                </EpisodeItem>
              ))}
            </EpisodesContainer>
          </div>
        </>
      )}
    </div>
  )
}

const ShowDetailsContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  [mq[1]]: {
    gridTemplateColumns: '1fr 1fr'
  },
  gridGap: '1rem'
})

const ShowDetailsImage = styled.div({
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
  }
})

const EpisodesContainer = styled.div({
  columnCount: 1,
  [mq[0]]: {
    columnCount: 2
  },
  columnGap: '1rem'
})

const EpisodeItem = styled.div({
  breakInside: 'avoid',
  marginBottom: '1rem',
  '& a': {
    textDecoration: 'none',
    color: '#000000',
    '&:hover': {
      fontWeight: '500',
      textDecoration: 'underline'
    }
  }
})

const ShowExtraInfo = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  '& p': {
    margin: 0
  },
  '& label': {
    fontWeight: 'bold',
    color: '#550000',
    fontSize: '0.9rem',
    '& + p': {
      fontSize: '1.2rem'
    }
  }
})

const Rating = styled.div({
  display: 'flex',
  width: '90px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  backgroundColor: 'rgba(138,74,243,1)',
  color: '#ffffff',
  fontWeight: 'bold',
  padding: '0.25rem 0.5rem',
  margin: '1.5rem 0',
  '& svg': {
    marginRight: '0.5rem',
    width: '24px'
  }
})

export default ShowDetails
