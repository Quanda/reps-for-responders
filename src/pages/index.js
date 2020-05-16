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
import paypalLogo from '../../static/img/paypal.png';

const Index = ({ data }) => {
  const { events, mission_statement, contact_links, additional_links, multimedia } = data.strapiBusiness;
  const { youtube, instagram, facebook, twitter } = contact_links;

  // Filter images for the gallery items
  const galleryImages = multimedia.filter(obj => obj.name.startsWith('gallery_')).map(img => img.localFile.url);

  return (
    <Page>
      {/* ABOUT US */}
      <Hero color="white">
        <Hero.Body>
          <Heading style={{ textAlign: 'center' }} renderAs="h2">ABOUT US</Heading>
          <Columns>
            <Columns.Column>
              <Card>
                <Card.Content>
                  <Heading renderAs="h3" size={5}>WHO WE ARE</Heading>
                  <Content renderAs="ul">
                    <Content renderAs="li">
                      <i>Reps for Responders</i> is a non-profit fitness gym in New City, NY founded by NYPD officer Frank Voce.
                    </Content>
                    <Content renderAs="li">
                      The RFR team continues to add caring & dedicated individuals who have experienced or witnessed the impact of trauma - and have a desire a help others.
                    </Content>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            <Columns.Column>
              <Card>
                <Card.Content>
                  <Heading renderAs="h3" size={5}>WHAT WE DO</Heading>
                  <Content renderAs="ul">
                    <Content renderAs="li">
                      Free gym membership to all first responders and military personnel.
                    </Content>
                    <Content renderAs="li">
                      Online fitness classes.
                    </Content>
                    <Content renderAs="li">
                      Virtual support groups.
                    </Content>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column> 
            <Columns.Column>
              <Card>
                <Card.Content>
                  <Heading renderAs="h3" size={5}>HOW TO HELP</Heading>
                  <Content renderAs="ul">
                    <Content renderAs="li">
                      Want to get involved or learn more?&nbsp;
                      <Content renderAs="a" href="#contactus">Message us.</Content>
                    </Content>
                    <Content renderAs="li">
                      Able to donate?&nbsp;
                      <Content renderAs="a" href="#donate">See donation options.</Content>
                    </Content>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>

      {/* SOCIAL MEDIA */}
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

      {/* MISSION STATEMENT */}
      <Hero color="danger">
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

      <Hero color="white">
        <Hero.Body>
          <Columns>
            <Columns.Column></Columns.Column>
              {/* EVENTS */}
              <Columns.Column size="two-fifths">
                <Heading renderAs="h2">Events</Heading>
                {events && events.length > 0 ? (
                  <List>
                    {events.map((e, i) => (
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
                ) : <Content>No events posted at this time.</Content>}
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
      <Hero id="donate" size="medium">
        <Hero.Body>
          <Columns>
            <Columns.Column>
              <Heading renderAs="h2">HELP SUPPORT OUR FIRST RESPONDERS</Heading>
              <Heading renderAs="h3" subtitle>Your donations will help us to continue to provide for our First Responders by supporting our training facility and enabling future events.</Heading><br/>
            </Columns.Column>
            <Columns.Column>
              <Content className="col">
                <Content renderAs="a" href={additional_links.paypal} target="_blank" rel="noopener noreferrer" className="donate">
                  <img src={paypalLogo} alt="paypal" width={150} />
                </Content><br/>
                <Content renderAs="a" href={additional_links.gofundme} target="_blank" rel="noopener noreferrer" className="donate">
                  <img src={gofundmeLogo} alt="gofundme" width={150} />
                </Content>      
              </Content>                       
            </Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>   
      
      {/* CONTACT FORM */}
      <Hero id="contactus" size="small" color="white">
        <Hero.Body>
          <Columns>
            <Columns.Column></Columns.Column>
            <Columns.Column size="half">
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
      name
      description
      date
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
