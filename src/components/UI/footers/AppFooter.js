import React from 'react'
import { Segment, Container, Grid, Header, List, Button } from 'semantic-ui-react'

// const style = {
//   position: 'fixed',
//   bottom: '0px',
//   width: '100%',
//   padding: '5em 0em',
//   marginTop: '1.5em'
// }

export default function AppFooter() {
  return (
    <div>
      <Segment inverted vertical>
        <Container>
          <Grid divided inverted stackable  style={{ marginLeft: '3em' }}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
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
                  <List.Item as='a'>Some link</List.Item>
                  <List.Item as='a'>SOME LINK</List.Item>
                  <List.Item as='a'>Again a link</List.Item>
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