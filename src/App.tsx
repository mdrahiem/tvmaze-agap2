import {Provider} from 'react-redux'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/layout'
import EpisodeDetails from './routes/episode-details'
import Home from './routes/home'
import ShowDetails from './routes/show-details'
import {store} from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
