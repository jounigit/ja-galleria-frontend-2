import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Picture from './Picture'


const picture = {
    title: 'Kuva 1',
    content: 'Hieno kuva',
    image: 'kuva1.jpg',
    thumb: 'kuva1.jpg'
}

describe('<Picture />', () => {
    let component

    beforeEach(() => {
        component = render(
            <Picture picture={picture} />
        )
    })

    test('picture img', () => {
        const img = component.container.querySelector('img')
        expect(img.alt).toEqual(picture.thumb)
    })

    test('picture title', () => {
        const h2 = component.container.querySelector('h2')
        expect(h2).toHaveTextContent(picture.title)
    })

    test('picture content', () => {
      expect(component.container).toHaveTextContent(
        'Hieno kuva'
      )
    })

    test('Picture renders correctly', () => {
        const tree = renderer
          .create(<Picture picture={picture} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      })

})

