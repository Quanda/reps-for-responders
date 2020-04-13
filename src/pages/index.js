import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageWrapper from 'components/pageWrapper';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Level from 'react-bulma-components/lib/components/level';
import Hero from 'react-bulma-components/lib/components/hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import List from 'react-bulma-components/lib/components/list';

const Index = ({ data }) => {
  const { events, mission_statement } = data.strapiBusiness;
  
  return (
    <PageWrapper>
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
      
      <Level>
        <Hero size="small" color="danger">
          <Hero.Body>
            <Columns style={{ width: '75%', margin: 'auto' }}>
              <Columns.Column size="one-third">
                <Heading renderAs="h3">OUR MISSION</Heading> 
              </Columns.Column>
              <Columns.Column>
                <Content>{`"${mission_statement.substring(0, 273)}.."`}</Content>
                <Button outlined color="white">
                  Read the full Statement
                </Button>              
              </Columns.Column>
            </Columns>
          </Hero.Body>
        </Hero>
      </Level>
      <Columns>
        <Columns.Column></Columns.Column>
          <Columns.Column size="half">
            <Box>
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
            </Box>
          </Columns.Column>
        <Columns.Column></Columns.Column>
      </Columns>
    </PageWrapper>
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

  fragment allBusinessFields on StrapiBusiness {
    ...businessMeta
    ...businessUrls
    ...businessEvents
  }

  query ($strapiBusinessId: String) {
    strapiBusiness (id: {eq: $strapiBusinessId} ) {
      ...allBusinessFields
    }
  }
`;

export default Index;
