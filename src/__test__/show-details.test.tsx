import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import ShowDetails from '../routes/show-details'
import { store } from '../store'

it('renders show details page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <ShowDetails />
        </BrowserRouter>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
