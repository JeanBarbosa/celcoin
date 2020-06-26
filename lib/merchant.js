const Api = require('./api');

class Merchant {

  constructor(clientId, clientSecret, sandbox = false){
    this._instance = new Api(clientId, clientSecret);
  }

  /**
   * Retrieve your balance info
   */
  async balance() {

    const url = `/merchant/balance`;
    const { data } = await this._instance.get(url);

    return data;
  }

}

module.exports = Merchant;