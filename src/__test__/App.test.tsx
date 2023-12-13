import { renderHook, screen, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Home from '../routes/home'
import { useGetShowsListQuery } from '../services/tvmaze'
import { store } from '../store'
import { responseData } from './mockdata'

beforeEach(() => {
  fetchMock.resetMocks()
})

function wrapper(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  )
}

describe('Shows list', () => {
  const queryString = 'Powerpuff girls'
  const data = responseData

  beforeEach(() => {
    fetchMock.mockOnceIf(
      'https://api.tvmaze.com/search/shows?q=',
      async () =>
        await Promise.resolve({
          status: 200,
          body: JSON.stringify({ data })
        })
    )
  })
  it('should display shows', async () => {
    renderHook(() => useGetShowsListQuery(queryString), {
      wrapper
    })
    await waitFor(() => {
      expect(screen.getByText('Demashitaa! Powerpuff Girls Z')).toBeVisible()
    })
  })
})
