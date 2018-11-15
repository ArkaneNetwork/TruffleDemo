const ArkaneProvider = require("@arkane-network/truffle-arkane-provider");
const provider = new ArkaneProvider({
  apiKey: '',
  baseUrl: 'https://api-staging.arkane.network',
  providerUrl: 'https://kovan.fundrequest.io'
});

require('dotenv').config();

module.exports = {
  networks: {
    kovan: {
      network_id: '42',
      provider: () => provider
    }
  }
};
