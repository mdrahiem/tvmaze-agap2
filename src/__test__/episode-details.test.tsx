import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import EpisodeDetails from '../routes/episode-details'
import { store } from '../store'

it('renders episode details page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <EpisodeDetails />
        </BrowserRouter>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
