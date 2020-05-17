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
import { Page, ContactForm, Modal, Gallery, Footer } from '../components';
import gofundmeLogo from '../../static/img/gofundme.png';
import paypalLogo from '../../static/img/paypal.png';
import anchorFmPodcastLogo from '../../static/img/anchorfm.png';
import spotifyPodcastLogo from '../../static/img/spotify.png';
import applePodcastLogo from '../../static/img/apple-podcasts.png';

const Index = ({ data }) => {
  const { events, mission_statement, contact_links, additional_links, gallery, news } = data.strapiBusiness;
  const { youtube, instagram, facebook, twitter } = contact_links;
  const galleryImages = gallery.map(img => img.localFile.url);

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
                      <i>Reps for Responders</i> is a non-profit fitness gym in New City, NY founded by NYPD officer Frank Voce
                    </Content>
                    <Content renderAs="li">
                      The RFR team consists of caring & dedicated individuals with extensive fitness backgrounds and experiences overcoming trauma
                    </Content>
                  </Content>
                  <Content className="row">
                    <FontAwesomeIcon size="2x" icon={[ 'fas', 'users' ]} />
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
                      Free entry to all first responder and military personnel at our training gym
                    </Content>
                    <Content renderAs="li">
                      Online fitness classes
                    </Content>
                    <Content renderAs="li">
                      Virtual support groups
                    </Content>
                  </Content>
                  <Content className="row">
                    <FontAwesomeIcon size="2x" icon={[ 'fas', 'dumbbell' ]} />
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
                      Get involved - send us a&nbsp;
                      <Content renderAs="a" href="#contactus">message</Content>
                    </Content>
                    <Content renderAs="li">
                      Support with a&nbsp;
                      <Content renderAs="a" href="#donate">donation</Content>
                    </Content>
                  </Content>
                  <Content className="row">
                    <FontAwesomeIcon size="2x" icon={[ 'fas', 'hands-helping' ]} />
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>

      <Hero color="white">
        <Hero.Body>
          <Columns>
            <Columns.Column></Columns.Column>
              {/* IN THE NEWS */}
              <Columns.Column size="two-fifths">
                <Heading renderAs="h2">In the News</Heading>
                {news && news.length > 0 ? (
                  <List>
                    {news.map((n, i) => (
                      <Card key={i}>
                        <Card.Content>
                          <Content renderAs="a" href={n.url} target="_blank" rel="noopener noreferrer">
                            {n.title}
                          </Content>
                        </Card.Content>
                      </Card>
                    ))}  
                  </List>
                ) : <Content>No news yet.</Content>}
              </Columns.Column><br/>
              <Columns.Column size={1}></Columns.Column>
              {/* PODCAST */}
              <Columns.Column size="two-fifths">
                <Heading renderAs="h2">Podcast - Inside the Labyrinth</Heading>
                {additional_links.applePodcast && <Content renderAs="a" href={additional_links.applePodcast} target="_blank" rel="noopener noreferrer">
                  <img src={applePodcastLogo} alt="apple podcast" width={300} className="podcast-btn" />
                </Content>}
                {additional_links.spotifyPodcast && <Content renderAs="a" href={additional_links.spotifyPodcast} target="_blank" rel="noopener noreferrer">
                  <img src={spotifyPodcastLogo} alt="spotify podcast" width={300} className="podcast-btn" />
                </Content>}                
                {additional_links.anchorFmPodcast && <Content renderAs="a" href={additional_links.anchorFmPodcast} target="_blank" rel="noopener noreferrer">
                  <img src={anchorFmPodcastLogo} alt="anchorfm podcast" width={300} className="podcast-btn" />
                  <Heading subtitle size={6}>See all other available podcast links in Anchor.fm</Heading>
                </Content>}                
              </Columns.Column>
            <Columns.Column></Columns.Column>
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
            <Columns.Column size={1}></Columns.Column>
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
      <Hero id="donate" size="medium" color="primary">
        <Hero.Body>
          <Columns>
            <Columns.Column size={1}></Columns.Column>
            <Columns.Column>
              <Heading renderAs="h2">HELP SUPPORT OUR FIRST RESPONDERS</Heading>
              <Heading renderAs="h3" subtitle>Your donations will help us to continue to provide for our First Responders by supporting our training facility and enabling future events.</Heading><br/>
            </Columns.Column>
            <Columns.Column>
              <Content className="col">
                <Content renderAs="a" href={additional_links.paypal} target="_blank" rel="noopener noreferrer" className="donate-btn">
                  <img src={paypalLogo} alt="paypal" width={150} />
                </Content><br/>
                <Content renderAs="a" href={additional_links.gofundme} target="_blank" rel="noopener noreferrer" className="donate-btn">
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
      <Footer urls={contact_links} />
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
    caption
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
      anchorFmPodcast
      applePodcast
      spotifyPodcast
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

  fragment galleryImages on StrapiBusiness {
    gallery {
      name
      localFile {
        url
      }
    }
  }

  fragment businessNews on StrapiBusiness {
    news {
      title
      url
    }
  }

  query ($strapiBusinessId: String) {
    strapiBusiness (id: {eq: $strapiBusinessId} ) {
      ...businessMeta
      ...businessUrls
      ...businessEvents
      ...galleryImages
      ...businessNews
    }
  }
`;

export default Index;
