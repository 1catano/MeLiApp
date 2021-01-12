const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
});
