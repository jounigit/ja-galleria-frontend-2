import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import PictureList from './PictureList'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})


test('should render all pictures ', async () => {
  await act(async () => {
    ReactDOM.render(<PictureList />, container)
  })

  const pictures = container.querySelectorAll('img')
  expect(pictures.length).toBe(3)

  expect(container).toHaveTextContent('Kuva 1')

  expect(container).toHaveTextContent('Hieno kuva 3.')
})


