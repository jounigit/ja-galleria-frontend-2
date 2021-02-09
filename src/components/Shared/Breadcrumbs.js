import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'semantic-ui-react'

const linkStyle = {
  color: 'grey'
}

const Breadcrumbs = ({ path, linkName, active }) => (
  <Breadcrumb>
    <Breadcrumb.Section>
      <Link style={ linkStyle } to='/'>Home</Link>
    </Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section>
      <Link style={ linkStyle } to={path}>{ linkName }</Link>
    </Breadcrumb.Section>
    <Breadcrumb.Divider icon='right arrow' />
    <Breadcrumb.Section active>{ active }</Breadcrumb.Section>
  </Breadcrumb>
)

export default Breadcrumbs