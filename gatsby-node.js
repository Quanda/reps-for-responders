const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

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
    business_hours: Week
    contact_links: ContactLinks
    additional_links: AdditionalLinks
    events: Events
    multimedia: [Multimedia]
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
  type Multimedia {
    name: String
    url: String
  }
`
  createTypes(typeDefs)
}

exports.onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNode } = actions

  if ( node.internal.type !== null && node.internal.type === 'StrapiBusiness') {
    for ( const media of node.multimedia) {
      const fileNode = await createRemoteFileNode({
        url: process.env.API_URL + media.url,
        store,
        cache,
        createNode,
        createNodeId: id => id
      })
  
      if (fileNode) {
        media.localFile___NODE = fileNode.id;
      } 
    }
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
