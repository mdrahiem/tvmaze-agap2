import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Home from '../routes/home'
import { store } from '../store'

it('renders home page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
