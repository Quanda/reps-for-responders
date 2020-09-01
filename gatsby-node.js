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
    logo: MediaObject
    banner: String
    email: String
    description: String
    operating_hours: Week
    web_links: WebLink
    events: [Event]
    gallery: [MediaObject]
    news: [NewsObject]
    employees: [Employee]
    promotions: [PromotionObject]
    reviews: [ReviewObject]
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
  type WebLink {
    youtube: String
    instagram: String
    facebook: String
    twitter: String
    paypal: String
    fundthefirst: String
    anchorfm: String
    apple_podcast: String
    spotify_podcast: String
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
  type PromotionObject {
    url: String
    title: String
    description: String
  }
  type ReviewObject {
    reviewer: String
    text: String
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
    const mediaAssets = [...node.gallery, node.logo] || [];
    for (const img of mediaAssets) {
      if (img) {
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
