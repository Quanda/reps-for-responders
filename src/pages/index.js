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
import { Page, ContactForm, Modal, Gallery } from '../components';
import gofundmeLogo from '../../static/img/gofundme.png';
import paypalLogo from '../../static/img/paypal.svg';

const Index = ({ data }) => {
  const { events, mission_statement, contact_links, additional_links, multimedia } = data.strapiBusiness;
  const { youtube, instagram, facebook, twitter } = contact_links;

  // Filter images for the gallery
  const galleryImages = multimedia.filter(obj => obj.name.startsWith('gallery_')).map(img => img.localFile.url);

  return (
    <Page>
      <Hero size="small" color="white">
        <Hero.Body>
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
          </Columns>
        </Hero.Body>
      </Hero>

      <Hero size="medium" color="white">
        <Hero.Body>
          <Columns>
            <Columns.Column></Columns.Column>
            <Columns.Column size="half">
              <Heading style={{ textAlign: 'center' }} renderAs="h2" size={4}>CONNECT WITH US</Heading><br/>
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
            </Columns.Column>
            <Columns.Column></Columns.Column>
          </Columns>        
        </Hero.Body>
      </Hero>

      <Hero size="medium" color="danger">
        <Hero.Body>
          <Columns style={{ width: '80%', margin: 'auto' }}>
            <Columns.Column size="one-third">
              <Heading renderAs="h3">OUR MISSION</Heading> 
            </Columns.Column>
            <Columns.Column>
              <Content><span className="quot">&quot;</span>{mission_statement.substring(0, 273)}...<span className="quot">&quot;</span></Content><br/>
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
      </Hero>

      <Hero size="medium" color="white">
        <Hero.Body>
          <Columns>
            <Columns.Column></Columns.Column>
              {/* EVENTS */}
              <Columns.Column size="two-fifths">
                <Heading renderAs="h2">Events</Heading>
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
                <Heading renderAs="h2">Image Gallery</Heading>
                <Gallery images={galleryImages} />
              </Columns.Column>
            <Columns.Column></Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>
  
      {/* DONATION */}
      <Hero size="medium">
        <Hero.Body>
          <Columns>
            <Columns.Column size="two-fifths">
              <Heading renderAs="h2">HELP SUPPORT OUR NATION&apos;s FIRST RESPONDERS</Heading>
              <Heading renderAs="h3" subtitle>Your contributions will help us ease the pain of our First Responders by supporting our events and staff in providing a safe haven to our struggling warriors.</Heading><br/>
            </Columns.Column>
            <Columns.Column>
              <Content className="row">
                <Content renderAs="a" href={additional_links.paypal} target="_blank" rel="noopener noreferrer" className="donate">
                  <img src={paypalLogo} alt="paypal" width={100} />
                </Content>
                <Content renderAs="a" href={additional_links.gofundme} target="_blank" rel="noopener noreferrer" className="donate">
                  <img src={gofundmeLogo} alt="gofundme" width={200} />
                </Content>      
              </Content>                       
            </Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>   
      
      <Hero size="small" color="white">
        <Hero.Body>
          <Columns>
            <Columns.Column></Columns.Column>
            <Columns.Column size="half">
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
      localFile {
        url
      }
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
