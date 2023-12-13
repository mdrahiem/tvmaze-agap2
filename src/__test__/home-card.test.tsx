import { render, screen } from '@testing-library/react'
import HomeCard from '../components/home-card'

const imgUrl = 'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg'
const title = 'The Powerpuff Girls'

test('renders home card component', () => {
  render(<HomeCard imgUrl={imgUrl} title={title} />)
  const cardTitle = screen.getByText(/the powerpuff girls/i)
  expect(cardTitle).toBeInTheDocument()
})
