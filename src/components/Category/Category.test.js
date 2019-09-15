import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Category from './Category'
import { BrowserRouter } from 'react-router-dom'

const category =  {
  id: 1,
  user_id: 1,
  title: 'Kategoria 1',
  slug: 'voluptas-tempora-quisquam-deserunt-id-suscipit',
  content: 'Voluptas et atque facilis ipsam voluptas. Recusandae excepturi at officia iusto aperiam. Ratione ducimus voluptatibus voluptas consequuntur sed voluptatem.',
  created_at: '2019-09-04 15:33:50',
  updated_at: '2019-09-04 15:33:50',
  deleted_at: null,
  user: {
    id: 5,
    name: 'Boris Turner',
    email: 'sromaguera@example.net',
    email_verified_at: '2019-09-04 15:33:50',
    is_admin: 0,
    created_at: '2019-09-04 15:33:50',
    updated_at: '2019-09-04 15:33:50',
    deleted_at: null
  },
  albums: [
    {
      id: 1,
      user_id: 1,
      category_id: 2,
      title: 'Mr.',
      slug: 'ut-eum-velit-vel-quidem-velit-nam-id',
      content: 'Veniam fugit et qui optio. Aut eaque ipsam quo officia ut sequi est. Minus nemo placeat aliquid aut quaerat.',
      created_at: '2019-09-04 15:33:50',
      updated_at: '2019-09-04 15:33:50',
      deleted_at: null
    },
    {
      id: 2,
      user_id: 2,
      category_id: 2,
      title: 'Mrs.',
      slug: 'sapiente-eveniet-impedit-natus-quaerat-non-saepe',
      content: 'Nobis dignissimos fuga deleniti aspernatur. Voluptatum similique et voluptatibus qui. Omnis voluptas laboriosam dignissimos quia et exercitationem. Ut et qui unde esse sed.',
      created_at: '2019-09-04 15:33:50',
      updated_at: '2019-09-04 15:33:50',
      deleted_at: null
    },
    {
      id: 3,
      user_id: 2,
      category_id: 2,
      title: 'Prof.',
      slug: 'odio-non-doloribus-possimus-dolorem-occaecati',
      content: 'Hic odit veniam veritatis. Veritatis culpa tempora sequi magnam vel molestiae eius. Adipisci cum rerum hic perferendis corporis ratione quae.',
      created_at: '2019-09-04 15:33:50',
      updated_at: '2019-09-04 15:33:50',
      deleted_at: null
    }
  ]
}

describe('<Category />', () => {
  let component

  beforeEach(() => {
    component = render(
      <BrowserRouter><Category category={category} /></BrowserRouter>
    )
  })


  test('category has right title', () => {
    const title = component.container.querySelector('h3')
    expect(title).toHaveTextContent(category.title)
  })

  test('category has creator', () => {
    const h4 = component.container.querySelector('h4')
    expect(h4).toHaveTextContent(category.user.name)
  })

  test('category has albums', () => {
    const categories = component.container.querySelectorAll('li')
    expect(categories.length).toBe(3)
  })

  // test('Category renders correctly', () => {
  //   const tree = renderer.create(<Category category={category} />).toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})
