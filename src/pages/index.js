import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Hero from 'react-bulma-components/lib/components/hero';
import List from 'react-bulma-components/lib/components/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { ContactForm, Modal, Avatar, Gallery, Footer } from '../components';
import * as images from '../../static/img';

const Index = ({ data }) => {
  const {
    events,
    description,
    email,
    web_links,
    gallery,
    news,
    promotions,
    employees,
  } = data.strapiBusiness;
  const {
    youtube,
    instagram,
    facebook,
    twitter,
    anchorfm,
    apple_podcast,
    spotify_podcast,
    paypal,
    fundthefirst,
  } = web_links;

  return (
    <>
      {/* ABOUT US */}
      <Hero>
        <Hero.Body>
          <Columns>
            <Columns.Column>
              <Card>
                <Card.Content>
                  <Heading renderAs="h3" size={4}>
                    WHO WE ARE
                  </Heading>
                  <Content renderAs="ul">
                    <Content renderAs="li">
                      <i>Reps for Responders</i> is a non-profit fitness gym in
                      Rockland County, NY
                    </Content>
                    <Content renderAs="li">
                      The RFR team consists of caring & dedicated individuals
                      with extensive fitness backgrounds and experiences
                      overcoming obstacles
                    </Content>
                  </Content>
                  <Content className="row evenly">
                    <FontAwesomeIcon size="3x" icon={['fas', 'users']} />
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            <Columns.Column>
              <Card>
                <Card.Content>
                  <Heading renderAs="h3" size={4}>
                    WHAT WE DO
                  </Heading>
                  <Content renderAs="ul">
                    <Content renderAs="li">
                      Free entry to all first responder and military personnel
                      at our training gym
                    </Content>
                    <Content renderAs="li">Online fitness classes</Content>
                    <Content renderAs="li">Virtual support groups</Content>
                  </Content>
                  <Content className="row evenly">
                    <FontAwesomeIcon size="3x" icon={['fas', 'dumbbell']} />
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            <Columns.Column>
              <Card>
                <Card.Content>
                  <Heading renderAs="h3" size={4}>
                    HOW TO HELP
                  </Heading>
                  <Content renderAs="ul">
                    <Content renderAs="li">
                      Get involved - send us a&nbsp;
                      <Content renderAs="a" href="#contactus">
                        message
                      </Content>
                    </Content>
                    <Content renderAs="li">
                      Support with a&nbsp;
                      <Content renderAs="a" href="#donate">
                        donation
                      </Content>
                    </Content>
                  </Content>
                  <Content className="row evenly">
                    <FontAwesomeIcon
                      size="3x"
                      icon={['fas', 'hands-helping']}
                    />
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>

      <Hero>
        <Hero.Body>
          <Columns>
            <Columns.Column />
            {/* IN THE MEDIA */}
            <Columns.Column size="two-fifths">
              <Heading renderAs="h2">
                <FontAwesomeIcon size="1x" icon={['fas', 'newspaper']} />
                In the Media
              </Heading>
              {news && news.length > 0 ? (
                <List>
                  {news.map((n) => (
                    <Card key={n.url}>
                      <Card.Content>
                        <Heading renderAs="h6" size={6}>
                          {n.source}
                        </Heading>
                        <Content
                          renderAs="a"
                          href={n.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {n.title}
                        </Content>
                      </Card.Content>
                    </Card>
                  ))}
                </List>
              ) : (
                <Content>No news yet.</Content>
              )}
            </Columns.Column>
            <br />
            <Columns.Column size={1} />

            {/* PODCAST */}
            <Columns.Column size="two-fifths">
              <Heading renderAs="h2">
                <FontAwesomeIcon size="1x" icon={['fas', 'podcast']} />
                Podcast - Inside the Labyrinth
              </Heading>
              <Card>
                <Card.Content>
                  {apple_podcast && (
                    <Content
                      renderAs="a"
                      href={apple_podcast}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={images.apple}
                        alt="apple podcast"
                        width={300}
                        className="podcast-btn"
                      />
                    </Content>
                  )}
                  {spotify_podcast && (
                    <Content
                      renderAs="a"
                      href={spotify_podcast}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={images.spotify}
                        alt="spotify podcast"
                        width={300}
                        className="podcast-btn"
                      />
                    </Content>
                  )}
                  {anchorfm && (
                    <Content
                      renderAs="a"
                      href={anchorfm}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={images.anchorfm}
                        alt="anchorfm podcast"
                        width={300}
                        className="podcast-btn"
                      />
                      <Heading subtitle size={6}>
                        See all other available podcast links in Anchor.fm
                      </Heading>
                    </Content>
                  )}
                </Card.Content>
              </Card>
              <br />

              {/* PROMOTIONS */}
              {promotions.length > 0 && (
                <>
                  <Heading renderAs="h2">
                    <FontAwesomeIcon size="1x" icon={['fas', 'bullhorn']} />
                    Promotions
                  </Heading>
                  <Heading subtitle size={6}>
                    Limited time only!
                  </Heading>
                  <List>
                    {promotions.map((promotion) => (
                      <Card key={promotion.url}>
                        <Card.Content>
                          <Heading renderAs="h6" size={6}>
                            {promotion.title}
                          </Heading>
                          <Content
                            renderAs="a"
                            href={promotion.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {promotion.description}
                          </Content>
                        </Card.Content>
                      </Card>
                    ))}
                  </List>
                </>
              )}
            </Columns.Column>
            <Columns.Column />
          </Columns>
        </Hero.Body>
      </Hero>

      {/* MEET THE TEAM */}
      {employees.length > 0 && (
        <Hero>
          <Hero.Body>
            <br />
            <Heading className="text-center" renderAs="h2">
              MEET OUR TEAM
            </Heading>
            <br />
            <Columns className="content-center">
              {employees.map((employee) => (
                <Columns.Column
                  key={employee.id}
                  style={{ maxWidth: 400, margin: 'auto' }}
                  mobile={{ size: 12 }}
                  tablet={{ size: 6 }}
                  desktop={{ size: 4 }}
                >
                  <Avatar person={employee} />
                </Columns.Column>
              ))}
            </Columns>
          </Hero.Body>
        </Hero>
      )}

      <Hero size="small" color="black">
        <Hero.Body>
          <img
            src={images.minotaur}
            alt="minotaur"
            width={225}
            style={{ display: 'block', margin: 'auto', borderRadius: '100%' }}
          />
        </Hero.Body>
      </Hero>

      {/* MISSION STATEMENT */}
      {description && (
        <Hero size="small" color="black">
          <Hero.Body>
            <Columns style={{ width: '80%', margin: 'auto' }}>
              <Columns.Column size={1} />
              <Columns.Column size="one-third">
                <Heading renderAs="h3">OUR MISSION</Heading>
              </Columns.Column>
              <Columns.Column>
                <Content size="medium">
                  {description.substring(0, 365)}...(continued)
                </Content>
                <br />
                <Modal
                  button={{
                    color: 'white',
                    text: 'Read the full Statement',
                  }}
                  modal={{ closeOnBlur: true, showClose: true }}
                >
                  <Hero color="white">
                    <Hero.Body>
                      <Heading renderAs="h3">OUR MISSION</Heading>
                      <Content>{description}</Content>
                    </Hero.Body>
                  </Hero>
                </Modal>
              </Columns.Column>
            </Columns>
          </Hero.Body>
        </Hero>
      )}

      {/* SOCIAL MEDIA */}
      <Hero size="medium">
        <Hero.Body>
          <Columns>
            <Columns.Column />
            <Columns.Column size="two-fifths">
              <Heading className="text-center" renderAs="h2">
                CONNECT WITH US
              </Heading>
              <br />
              <Content className="row evenly">
                {youtube && (
                  <Media.Item
                    className="text-center"
                    renderAs="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={youtube}
                  >
                    <img
                      src={images.youtube}
                      alt="youtube"
                      width={75}
                      className="social-btn"
                    />
                  </Media.Item>
                )}
                {instagram && (
                  <Media.Item
                    className="text-center"
                    renderAs="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={instagram}
                  >
                    <img
                      src={images.instagram}
                      alt="instagram"
                      width={75}
                      className="social-btn"
                    />
                  </Media.Item>
                )}
                {facebook && (
                  <Media.Item
                    className="text-center"
                    renderAs="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={facebook}
                  >
                    <img
                      src={images.facebook}
                      alt="facebook"
                      width={75}
                      className="social-btn"
                    />
                  </Media.Item>
                )}
                {twitter && (
                  <Media.Item
                    className="text-center"
                    renderAs="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={twitter}
                  >
                    <img
                      src={images.twitter}
                      alt="twitter"
                      width={75}
                      className="social-btn"
                    />
                  </Media.Item>
                )}
              </Content>
            </Columns.Column>
            <Columns.Column />
          </Columns>
        </Hero.Body>
      </Hero>

      <Hero size="small">
        <Hero.Body>
          <Columns>
            <Columns.Column />
            {/* EVENTS */}
            <Columns.Column size="two-fifths">
              <Heading renderAs="h2">
                <FontAwesomeIcon size="1x" icon={['fas', 'calendar-alt']} />
                Events
              </Heading>
              {events && events.length > 0 ? (
                <List>
                  {events.map((e) => (
                    <Card key={e.name}>
                      <Card.Content>
                        <Media>
                          <Media.Item renderAs="figure" position="left">
                            <FontAwesomeIcon size="2x" icon={faCalendarDay} />
                          </Media.Item>
                          <Media.Item>
                            <Heading renderAs="h5" size={5}>
                              {e.date}
                            </Heading>
                            <Heading renderAs="h5" subtitle size={5}>
                              {e.name}
                            </Heading>
                          </Media.Item>
                        </Media>
                        <Content>{e.description}</Content>
                      </Card.Content>
                    </Card>
                  ))}
                </List>
              ) : (
                <Content>No events listed at this time.</Content>
              )}
            </Columns.Column>
            {/* IMAGE GALLERY */}
            <Columns.Column size="two-fifths">
              <Heading renderAs="h2">
                <FontAwesomeIcon size="1x" icon={['fas', 'images']} />
                Image Gallery
              </Heading>
              <Heading subtitle size={6}>
                Swipe through, or tap to view in fullscreen
              </Heading>
              <Gallery
                images={{
                  fixed: gallery.map(
                    (img) => img.localFile.childImageSharp.fixed.src
                  ),
                  fluid: gallery.map(
                    (img) => img.localFile.childImageSharp.fluid.src
                  ),
                }}
              />
            </Columns.Column>
            <Columns.Column />
          </Columns>
        </Hero.Body>
      </Hero>

      {/* DONATION */}
      <Hero id="donate" size="medium" color="primary">
        <Hero.Body>
          <Columns>
            <Columns.Column size={1} />
            <Columns.Column>
              <Heading renderAs="h2">HELP SUPPORT OUR FIRST RESPONDERS</Heading>
              <Heading renderAs="h3" subtitle>
                Your donations will help us to continue to provide for our First
                Responders by supporting our training facility and enabling
                future events.
              </Heading>
              <br />
            </Columns.Column>
            <Columns.Column>
              <Content className="col">
                <Content
                  renderAs="a"
                  href={paypal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donate-btn"
                >
                  <img src={images.paypal} alt="paypal" width={150} />
                </Content>
                <br />
                <Content
                  renderAs="a"
                  href={fundthefirst}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donate-btn"
                >
                  <img
                    src={images.fundthefirst}
                    alt="fundthefirst"
                    width={150}
                  />
                </Content>
              </Content>
            </Columns.Column>
          </Columns>
        </Hero.Body>
      </Hero>

      {/* CONTACT FORM */}
      <Hero id="contactus" size="medium">
        <Hero.Body>
          <Columns>
            <Columns.Column />
            <Columns.Column size="half">
              <Heading className="text-center" renderAs="h2">
                SEND A MESSAGE
              </Heading>
              <br />
              <ContactForm />
            </Columns.Column>
            <Columns.Column />
          </Columns>
        </Hero.Body>
      </Hero>
      <Footer
        social_media={{ twitter, youtube, facebook, instagram }}
        email={email}
      />
    </>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    events: PropTypes.array,
    description: PropTypes.string,
    email: PropTypes.string,
    web_links: PropTypes.object,
    gallery: PropTypes.array,
    news: PropTypes.array,
    employees: PropTypes.array,
    promotions: PropTypes.array,
  }).isRequired,
};

/* GRAPHQL index query */
export const query = graphql`
  query($strapiBusinessId: String) {
    strapiBusiness(id: { eq: $strapiBusinessId }) {
      name
      caption
      banner
      logo {
        name
        localFile {
          childImageSharp {
            fixed(width: 85, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      email
      description
      operating_hours {
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
      }
      web_links {
        instagram
        youtube
        facebook
        twitter
        paypal
        fundthefirst
        anchorfm
        apple_podcast
        spotify_podcast
      }
      events {
        name
        description
        date
      }
      gallery {
        name
        localFile {
          childImageSharp {
            fixed(height: 400, quality: 100) {
              ...GatsbyImageSharpFixed
            }
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      news {
        source
        title
        url
      }
      promotions {
        url
        title
        description
      }
      employees {
        id
        name
        bio
        title
        picture {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Index;
