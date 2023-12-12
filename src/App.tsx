import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NoMatch from './components/no-match'
import EpisodeDetails from './routes/episode-details'
import Home from './routes/home'
import Layout from './routes/layout'
import ShowDetails from './routes/show-details'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'show/:showId',
        element: <ShowDetails />
      },
      {
        path: ':showId/episode/:episodeId',
        element: <EpisodeDetails />
      }
    ]
  }
])

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
