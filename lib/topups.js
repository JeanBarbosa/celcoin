const Api = require('./api');

class Topups {

  constructor(clientId, clientSecret, sandbox = false){
    this._instance = new Api(clientId, clientSecret);
  }

 /**
  * Get a list of providers
  * 
  * @param {int} stateCode DDD
  * @param {int} type Topup Types can be informed as: 
  *  0 for ALL
  * 1 for PIN
  * 2 for ONLINE
  * @param {int} category Topup Categories can be informed as:
  * 0 for ALL 
  * 1 for PHONES 
  * 2 for GAMES
  * 3 for TV
  * 4 for TRANSPORT
  * 5 for DIGITAL CONTENT
  */
  async getProviders(stateCode, type = 0, category = 0) {

    const url = `transactions/topups/providers`;
    const params = {stateCode, type, category };

    const { data } = await this._instance.get(url, params);

    return data;
  }

  /**
   * Check which carrier the phone number belongs
   * 
   * @param {int} stateCode DDD
   * @param {string} phoneNumber phone number
   */
  async findProvider(stateCode, phoneNumber) {

    const url = `transactions/topups/find-providers`;
    const params = {stateCode, phoneNumber };

    const { data } = await this._instance.get(url, params);

    return data;
  }

  /**
   * Retrieve a list of Providers and its values through a given
   * StateCode and ProviderId
   * 
   * @param {*} stateCode DDD
   * @param {*} providerId ID provider
   */
  async getProviderValues(stateCode, providerId){

    const url = `/transactions/topups/provider-values`;
    const params = {
      stateCode,
      providerId
    }

    const { data } = await this._instance.get(url, params);

    return data;
  }

  async postTopups(body){
    const url = `/transactions/topups`;

    const {data} = await this._instance.post(url, body);

    return data;
  }
  
}

module.exports = Topups;