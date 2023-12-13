import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BackLink from '../components/reusable/back-link'

test('renders back link component', () => {
  render(
    <BrowserRouter>
      <BackLink link="/" />
    </BrowserRouter>
  )
  const backLink = screen.getByTestId('back-link')
  expect(backLink).toBeInTheDocument()
})
