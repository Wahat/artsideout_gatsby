/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slugify = require(`slugify`);
var { CreateFriendlyUrl } = require('./src/helpers');

exports.createPages = async ({ graphql, actions }) => {

  var fs = require('fs');
  var dir = "/opt/build/repo/.cache/caches/gatsby-source-graphcms/"

  exports.onPreBootstrap = () => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }


  const result = await graphql(`
    query CreatePages {
      installation: allGraphCmsInstallation {
        nodes {
          title
          remoteId
        }
      }
      artist: allGraphCmsProfile {
        nodes {
          name
          remoteId
        }
      }
    }
  `);
  result.data.installation.nodes.forEach(({ title, remoteId }) => {
    actions.createPage({
      path: `/installation/${CreateFriendlyUrl(title, remoteId)}`,
      component: path.resolve('./src/templates/installationTemplate.tsx'),
      context: { id: remoteId }
    });
  });
  result.data.artist.nodes.forEach(({ name, remoteId }) => {
    actions.createPage({
      path: `/artist/${CreateFriendlyUrl(name, remoteId)}`,
      component: path.resolve('./src/templates/artistTemplate.tsx'),
      context: { id: remoteId }
    });
  });
};
