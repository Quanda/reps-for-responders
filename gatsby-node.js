/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
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
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
  type StrapiBusiness implements Node {
    name: String
    caption: String
    mission_statement: String
    business_hours: Week
    contact_links: ContactLinks
    additional_links: AdditionalLinks
    events: [Event]
    gallery: [MediaObject]
    news: [NewsObject]
    employees: [Employee]
  }
  type Event {
    name: String
    description: String
    date: Date
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
    anchorFmPodcast: String
    applePodcast: String
    spotifyPodcast: String
  }
  type MediaObject {
    name: String
    localFile: File
  }
  type NewsObject {
    source: String
    url: String
    title: String
  }
  type Employee {
    id: String
    name: String
    bio: String
    title: String
    picture: File
  }
`;
  createTypes(typeDefs);
};

exports.onCreateNode = async ({
  actions: { createNode },
  node,
  store,
  cache,
}) => {
  if (
    node.internal.type === 'StrapiBusiness' &&
    node.id === process.env.STRAPI_BUSINESS_ID
  ) {
    for (const img of node.gallery) {
      try {
        const isHttpNode = img.url.startsWith('http');
        const fileNode = await createRemoteFileNode({
          url: isHttpNode ? img.url : process.env.API_URL + img.url,
          store,
          cache,
          createNode,
          createNodeId: (id) => id,
        });

        if (fileNode) {
          img.localFile___NODE = fileNode.id;
        }
      } catch (e) {
        console.log(
          'ERROR in createRemoteFileNode of onCreateNode in gatsby-node.js',
          e
        );
      }
    }
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};
