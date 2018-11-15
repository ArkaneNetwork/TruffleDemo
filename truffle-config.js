const PrivateKeyProvider = require("truffle-privatekey-provider");
const provider = new PrivateKeyProvider('7fc1393a94fb36fba8cffe511702a89b17ce8fee30fd66d334e423dac87147e8', "https://kovan.fundrequest.io/");

require('dotenv').config();

module.exports = {
  networks: {
    kovan: {
      network_id: '42',
      provider: () => provider
    }
  }
};
