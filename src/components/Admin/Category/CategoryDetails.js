import React, { useState, useContext } from 'react'
import ListItemAlbum from './ListItemAlbum'
import RemoveCategory from './RemoveCategory'
import UpdateCategory from './UpdateCategory'
import ModalSection from '../../Shared/modal/ModalSection'
import { AuthContext } from '../../../contexts/AuthContext'
import { Table } from 'semantic-ui-react'

const CategoryDetails = ({ category }) => {
  const [visible, setVisible] = useState(false)
  const { auth } = useContext(AuthContext)

  const albums = () => category.albums.map(a =>
    <ListItemAlbum key={a.id} album={a} />
  )

  const showWhenVisible = { display: visible ? '' : 'none' }
  const linkable = {
    color: 'Blue',
    textDecoration: 'Underline'
  }

  return (
    <div className='category' data-cy='category'>
      { auth.user &&
            <Table celled striped>
              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing textAlign='top'>
                    <h3 data-cy='header'>
                      {category.title}
                    </h3>
                  </Table.Cell>
                  <Table.Cell>
                    {category.content}
                    <h5>
                        Author - {category.user.name}
                    </h5>
                  </Table.Cell>
                  <Table.Cell collapsing>
                    <ModalSection
                      btnIcon={'edit'}
                      compToModal={ UpdateCategory }
                      headerContent={'Update Category'}
                      id={category.id}
                      title={category.title}
                      content={category.content}
                      author={category.user.name}
                    />
                  </Table.Cell>
                  <Table.Cell collapsing>
                    <RemoveCategory
                      id={category.id}
                      title={category.title}
                      author={category.user.name}
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell colSpan='3'>
                    <h4  data-cy='linkable' style={linkable} onClick={() => setVisible(!visible)}>
                      Albums
                    </h4>
                    <ul style={showWhenVisible}>
                      {albums().length > 0 ? albums() : 'no albums'}
                    </ul>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
      }


      {/* <h3 data-cy='header'>
        {category.title}
      </h3>

      <p>
        {category.content}
      </p>
      <h5>
          Author - {category.user.name}
      </h5>
      <h3  data-cy='linkable' style={linkable} onClick={() => setVisible(!visible)}>Albums</h3>
      <ul style={showWhenVisible}>
        {albums().length > 0 ? albums() : 'no albums'}
      </ul>

      <hr /> */}
    </div>
  )
}

export default CategoryDetails

