const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreatePage = ({ page, actions }) => {
  actions.createPage({
    ...page,
    context: {
      ...page.context,
      strapiBusinessId: process.env.STRAPI_BUSINESS_ID,
    },
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
  type StrapiBusiness implements Node {
    name: String
    description: String
    mission_statement: String
    logo: Logo
    business_hours: Week
    contact_links: ContactLinks
    additional_links: AdditionalLinks
    events: Events
  }

  type Logo {
    url: String
  }
  type Event {
    name: String
    description: String
    date: Date
  }
  type Events {
    upcoming: [Event]
  }
  type Week {
    Monday: Date
    Tuesday: Date
    Wednesday: Date
    Thursday: Date
    Friday: Date
    Saturday: Date
    Sunday: Date
  }
  type ContactLinks {
    youtube: String
    instagram: String
    facebook: String
    twitter: String
    email: String
  }
  type AdditionalLinks {
    paypal: String
    gofundme: String
  }
`
  createTypes(typeDefs)
}

exports.onCreateNode = ({ node }) => {
  if ( node.internal.type !== null && node.internal.type === 'StrapiBusiness') {
    // Append API_URL to the logo path
    node.logo.url = process.env.API_URL + node.logo.url;
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};
