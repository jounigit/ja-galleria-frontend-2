import React from 'react'
import { Segment, Container, Grid, Header, List, Button } from 'semantic-ui-react'

const style = {
  position: 'relative',
  bottom: '0px',
  width: '100%',
  // padding: '5em 0em',
  marginTop: '1.5em'
}

export default function AppFooter() {
  return (
    <div style={ style }>
      <Segment inverted vertical>
        <Container>
          <Grid divided inverted stackable  style={{ marginLeft: '3em' }}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>
                    <Button circular icon='facebook' size='mini' />
                  </List.Item>
                  <List.Item as='a'>
                    <Button circular icon='twitter' size='mini' />
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Something else</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                Footer Header
                </Header>
                <p>
                Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  )
}