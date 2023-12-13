import { renderHook, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { useGetShowsListQuery } from '../services/tvmaze'
import { store } from '../store'
import { responseData } from './mockdata'

function wrapper({ children }: { children: ReactNode }): JSX.Element {
  return <Provider store={store}>{children}</Provider>
}

beforeEach(() => {
  fetchMock.resetMocks()
})

describe('useGetShowsListQuery', () => {
  const endpointName = 'getShowsList'
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

  it('renders hook', async () => {
    const { result } = renderHook(() => useGetShowsListQuery(queryString), {
      wrapper
    })

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName,
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })
    expect(fetchMock).toBeCalledTimes(1)

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName,
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: data,
      isFetching: false
    })
  })
})
