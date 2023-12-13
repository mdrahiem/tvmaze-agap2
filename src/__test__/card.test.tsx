import { render, screen } from '@testing-library/react'
import Card from '../components/reusable/card'

test('renders card component', () => {
  render(<Card>Testing</Card>)
  const card = screen.getByTestId('card-single')
  expect(card).toBeInTheDocument()
})
