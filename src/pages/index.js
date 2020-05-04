import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Level from 'react-bulma-components/lib/components/level';
import Hero from 'react-bulma-components/lib/components/hero';
import List from 'react-bulma-components/lib/components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { Page, ContactForm, Modal } from '../components';

const Index = ({ data }) => {
  const { events, mission_statement, contact_links } = data.strapiBusiness;
  const { youtube, instagram, facebook, twitter } = contact_links;

  return (
    <Page>
      <Columns>
        <Columns.Column />
        <Columns.Column size="one-quarter">
          <Card>
            <Card.Content>
              <Heading renderAs="h3" size={5}>A header here</Heading>
              <Content>
                Some content here.
              </Content>
            </Card.Content>
          </Card>
        </Columns.Column>
        <Columns.Column size="one-quarter">
          <Card>
            <Card.Content>
              <Heading renderAs="h3" size={5}>Another header here</Heading>
              <Content>
                Some content here.
              </Content>
            </Card.Content>
          </Card>
        </Columns.Column> 
        <Columns.Column size="one-quarter">
          <Card>
            <Card.Content>
              <Heading renderAs="h3" size={5}>Another header here</Heading>
              <Content>
                More content here
              </Content>
            </Card.Content>
          </Card>
        </Columns.Column>
        <Columns.Column />
      </Columns><br/><br/>
      
        <Hero size="small" color="danger">
          <Hero.Body>
            <Columns style={{ width: '80%', margin: 'auto' }}>
              <Columns.Column size="one-third">
                <Heading renderAs="h3">OUR MISSION</Heading> 
              </Columns.Column>
              <Columns.Column>
                <Content>{`"${mission_statement.substring(0, 273)}.."`}</Content>
                <Modal
                  button={{ color: 'white', text: 'Read the full Statement' }}
                  modal={{ closeOnBlur: true, showClose: true }}
                >
                  <Hero color="white">
                    <Hero.Body>
                      <Heading renderAs="h3">OUR MISSION</Heading> 
                      <Content>{mission_statement}</Content>           
                    </Hero.Body>
                  </Hero>                  
                </Modal>            
              </Columns.Column>
            </Columns>
          </Hero.Body>
        </Hero><br/><br/>

      <Columns>
        <Columns.Column></Columns.Column>
          {/* EVENTS */}
          <Columns.Column size="two-fifths">
            <Heading renderAs="h2">Upcoming Events</Heading>
            <List>
              {events.upcoming.map((e, i) => (
                <Card key={i}>
                  <Card.Content>
                    <Media>
                      <Media.Item renderAs="figure" position="left">
                        <FontAwesomeIcon size="2x" icon={faCalendarDay} />
                      </Media.Item>
                      <Media.Item>
                        <Heading renderAs="h5" size={5}>{e.date}</Heading>
                        <Heading renderAs="h5" subtitle size={5}>{e.name}</Heading>
                      </Media.Item>
                    </Media>
                    <Content>{e.description}</Content>
                  </Card.Content>
                </Card>
              ))}  
            </List>
          </Columns.Column>
          {/* IMAGE GALLERY */}
          <Columns.Column size="two-fifths">
            add images/gallery here
          </Columns.Column>
        <Columns.Column></Columns.Column>
      </Columns><br/><br/>
      
      <Hero color="light">
        <Hero.Body>
          <Columns>
            <Columns.Column></Columns.Column>
            <Columns.Column size="half">
              <Heading style={{ textAlign: 'center' }} renderAs="h2" size={4}>Find us on social media</Heading><br/>
              <Level>
                {youtube && <Level.Item>
                  <Content renderAs="a" target="_blank" href={youtube}>
                    <FontAwesomeIcon size="3x" icon={[ 'fab', 'youtube' ]} />
                  </Content>
                </Level.Item>}
                {instagram && <Level.Item>
                  <Content renderAs="a" target="_blank" href={instagram}>
                    <FontAwesomeIcon size="3x" icon={[ 'fab', 'instagram' ]} />
                  </Content>
                </Level.Item>}
                {facebook && <Level.Item>
                  <Content renderAs="a" target="_blank" href={facebook}>
                    <FontAwesomeIcon size="3x" icon={[ 'fab', 'facebook' ]} />
                  </Content>
                </Level.Item>}
                {twitter && <Level.Item>
                  <Content renderAs="a" target="_blank" href={twitter}>
                    <FontAwesomeIcon size="3x" icon={[ 'fab', 'twitter' ]} />
                  </Content>
                </Level.Item>}
              </Level>
              <br/><br/>
              {/* CONTACT FORM */}
              <ContactForm />
            </Columns.Column>
            <Columns.Column></Columns.Column>
          </Columns>        
        </Hero.Body>
      </Hero>

    </Page>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

/* Primary query made up of sub queries in fragment form for reuse in other pages */
export const query = graphql`
  fragment businessMeta on StrapiBusiness {
    name
    description
    mission_statement
    business_hours {
      Monday
      Tuesday
      Wednesday
      Thursday
      Friday
      Saturday
      Sunday
    }
  }

  fragment businessUrls on StrapiBusiness {
    additional_links {
      paypal
      gofundme
    }
    contact_links {
      instagram
      youtube
      facebook
      twitter
      email
    }
  }

  fragment businessEvents on StrapiBusiness {
    events {
      upcoming {
        name
        description
        date
      }
    }
  }

  fragment multimediaObjects on StrapiBusiness {
    multimedia {
      name
      url
    }
  }

  query ($strapiBusinessId: String) {
    strapiBusiness (id: {eq: $strapiBusinessId} ) {
      ...businessMeta
      ...businessUrls
      ...businessEvents
      ...multimediaObjects
    }
  }
`;

export default Index;
